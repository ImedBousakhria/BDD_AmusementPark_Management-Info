const mysql = require('mysql');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { promisify } = require('util');

require('dotenv').config();

// Connection pool
const pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

// Promisify the query method to use async/await
const query = promisify(pool.query).bind(pool);

// Feedback routes
router.post('/feedback', async (req, res) => {
    const { email, comment } = req.body;
    try {
        await query('INSERT INTO feedback (email, comment) VALUES (?, ?)', [email, comment]);
        res.status(201).json({ message: 'Feedback created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating feedback' });
    }
});

router.get('/feedback', async (req, res) => {
    try {
        const results = await query('SELECT * FROM feedback');
        res.json(results);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error getting feedback data' });
    }
});

// Registration route
exports.register = async (req, res) => {
    try {
        const { firstname, lastname, email, password, passwordConfirm, number } = req.body;

        // Check if the email is already in use
        const results = await query('SELECT email FROM users WHERE email = ?', [email]);

        if (results.length > 0) {
            return res.render('register', {
                message: 'That email is already in use'
            });
        } else if (password !== passwordConfirm) {
            return res.render('register', {
                message: 'Passwords do not match'
            });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 8);

        // Insert user data into the database
        await query('INSERT INTO users SET ?', {
            firstname,
            lastname,
            email,
            password: hashedPassword,
            number
        });

        return res.render('register', {
            message: 'User registered'
        });
    } catch (error) {
        console.log('An error occurred while processing the request', error);
        return res.status(500).send('Internal Server Error');
    }
};

// Login route
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    try {
        // Query the user with the given email from the database
        const results = await query('SELECT * FROM users WHERE email = ?', [email]);

        // Check if a user with the given email exists
        if (results.length === 0) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const user = results[0];

        // Compare the provided password with the hashed password from the database
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
            // Passwords match, login successful
            return res.status(200).json({ message: 'Login successful', user: { id: user.id, email: user.email } });
        } else {
            // Passwords do not match
            return res.status(401).json({ message: 'Invalid email or password' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    loginUser
};
