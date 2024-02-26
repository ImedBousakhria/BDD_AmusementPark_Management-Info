// middleware/isManager.js
const mysql = require('mysql2/promise');
const { pool } = require('../models/db'); // Adjust to your database setup
// middleware function check if the user is a manager 
async function isManager(req, res, next) {
  const userId = req.user.id; 

  
  try {
    // query the database to check if the user is a manager 
    const [manager] = await pool.execute('SELECT * FROM managers WHERE user_id = ?', [userId]);
    // if the user is a manager , set req.isManager to true and store the manager's team_id
    if (manager) {
      req.isManager = true;
      req.managerTeamId = manager.team_id;
    } else {

      req.isManager = false;
    }
    // move on to the next middleware in the stack
    next();
  } catch (error) {
    // handle any errors that occur during the database query
    console.error('Error identifying manager:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  isManager,
  
};