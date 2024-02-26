const mysql = require('mysql');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {pool} = require('../../models/db');

// feedback
router.post('/feedback', async (req, res) => {
  const { email, comment } = req.body;
  try {
      // Get a connection from the pool
      const connection = await pool.getConnection();

      // Insert feedback into the MySQL database
      const [result] = await connection.execute(
          'INSERT INTO feedback (email, comment) VALUES (?, ?)',
          [email, comment]
      );

      connection.release(); // Release the connection back to the pool

      res.status(201).json({
          message: 'Feedback created successfully',
          insertedId: result.insertId
      });
  } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.get('/feedback', async (req, res) => {
  try {
      // Get a connection from the pool
      const connection = await pool.getConnection();

      // Retrieve feedback from the MySQL database
      const [rows] = await connection.query('SELECT * FROM feedback');

      connection.release(); // Release the connection back to the pool

      res.status(200).json(rows);
  } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal Server Error' });
  }
});

// handle errors
const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = { email: '', password: '' };

  // incorrect email
  if (err.message === 'incorrect email') {
    errors.email = 'Email does not exist';
  }

  // incorrect password
  if (err.message === 'incorrect password') {
    errors.password = 'Incorrect password';
  }

  // duplicate email error
  if (err.code === 'ER_DUP_ENTRY') {
    errors.email = 'That email is already registered';
    return errors;
  }

  // validation errors
  if (err.message.includes('user validation failed')) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

// create json web token
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, 'sara secret', {
    expiresIn: maxAge,
  });
};

// controller actions

// controller actions
module.exports.signup_get = (req, res) => {
    res.render('signup');
  }
  
  module.exports.login_get = (req, res) => {
    res.render('login');
  }

module.exports.signup_post = async (req, res) => {
  const { name, prenom, email, tel, password } = req.body;

  try {
    // hash the password
    const hashedPassword = await bcrypt.hash(password, 8);

    // insert user into database
    pool.query(
      'INSERT INTO users (name, prenom, email, tel, password) VALUES (?, ?, ?, ?, ?)',
      [name, prenom, email, tel, hashedPassword],
      (error, results) => {
        if (error) {
          const errors = handleErrors(error);
          res.status(400).json({ errors });
        } else {
          const token = createToken(results.insertId);
          res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
          res.status(201).json({ user: results.insertId });
        }
      }
    );
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

module.exports.login_post = async (req, res) => {
  const { email, password } = req.body;

  // find user by email
  pool.query('SELECT * FROM users WHERE email = ?', [email], async (error, results) => {
    try {
      if (error || results.length === 0) {
        throw Error('incorrect email');
      }

      // compare the password
      const user = results[0];
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        throw Error('incorrect password');
      }

      // create a token
      const token = createToken(user.id);
      res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
      res.status(200).json({ user: user.id });
    } catch (err) {
      const errors = handleErrors(err);
      res.status(400).json({ errors });
    }
  });
};

module.exports.logout_get = (req, res) => {
  res.cookie('jwt', '', { maxAge: 1 });
  res.redirect('/');
};