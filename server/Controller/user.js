const mysql = require('mysql');
const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken');



require('dotenv').config();


//connection pool

let connection = mysql.createConnection({
    connectionLimit: 10,
    host: process.env.DB_HOST ,
    user : process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

// connect to database

connection.getConnection((err) =>{
if (err){
    console.error('Erroro connecting to my sql:' +err.stack)
    return;
}
console.log('Connected to my sql as id' + connection.threadId)
connection.release();
});


// add feedback to my sql


router.post('/feedback',  (req, res) => {
    const { email, comment } = req.body;
    connection.query('INSERT INTO feedback (email,comment) VALUES (? , ?)' , [email,comment], (error,results)=>{
        if(error){
            console.error(error);
            return res.status(500).json({message:'Error creating feedback'});
        }
        res.status(201).json({message: 'Feedback created successfully'});
    });
    });
    // get feedback from MySQL

    router.get('/feedback' , (req , res) => {
        connection.query('SELECT * FROM feedback' , (error , results) =>{
            if(error) {
                console.error(error);
                return res.status(500).json({message:"There was an error getting the data"});
            }
            res.json(results)
        });
    });
    


/////////////////////////////////////////////////////////////////////////////////////////////////

//authentification 

exports.register = async (req, res) => {
    try {
        console.log(req.body);
        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
        const email = req.body.email;
        const password = req.body.password;
        const passwordConfirm = req.body.passwordConfirm;
        const number = req.body.number;

        // check if the email is already in use
        connection.query('SELECT email FROM users WHERE email = ?', [email], async (error, results) => {
            if (error) {
                console.log(error);
                return res.status(500).send('Internal Server Error');
            }

            if (results.length > 0) {
                //return front page
                return res.render('register', {
                    message: 'That email is already in use',
                });
            } else if (password !== passwordConfirm) {
                return res.render('register', {
                    message: 'Passwords do not match',
                });
            }

            try {
                // hash the password
                const hashedPassword = await bcrypt.hash(password, 8);
                console.log(hashedPassword);

                connection.query('INSERT INTO users SET ?', {
                    firstname: firstname,
                    lastname: lastname,
                    email: email,
                    password: hashedPassword,
                    number: number,
                }, (error, results) => {
                    if (error) {
                        console.log(error);
                        return res.status(500).send('Internal Server Error');
                    } else {
                        return res.render('register', {
                            message: 'User registered',
                        });
                    }
                });
            } catch (error) {
                console.log('An error occurred while trying to hash the password', error);
                return res.status(500).send('Internal Server Error');
            }
        });
    } catch (error) {
        console.log('An error occurred while processing the request', error);
        return res.status(500).send('Internal Server Error');
    }
};
    

    // login 
    




// Controller function for user login
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

// Helper function to execute MySQL queries
const query = (sql, values) => {
    return new Promise((resolve, reject) => {
        connection.query(sql, values, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

module.exports = {
    loginUser,
};

    
        
        

    
    

//send to admin 


// login

const middleware = require('./middleware');
const mysqlConnection = require('./mysqlConnection');

// Controller function for user login
//const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // Check if email and password are provided
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    // Query the user with the given email from the database
    const results = await mysqlConnection.query('SELECT * FROM users WHERE email = ?', [email]);

    // Check if a user with the given email exists
    if (results.length === 0) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const user = results[0];

    // Compare the provided password with the hashed password from the database
    const passwordMatch = await middleware.comparePasswords(password, user.password);

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
//};

//module.exports = {
  //loginUser,
//};




















