// middleware/restrictToTeam.js
const { pool } = require('../models/db'); // Adjust to your database setup

// middleware function to restrict access based on user role and team id
function restrictToTeam(req, res, next) {
    // check if the user is manager 
    if (!req.isManager) {
      // if not a manager , deny access for regular users 
      return res.status(403).json({ error: 'You are not a manager' });
    }
  
    // Manager - Check if they have access to the specified team id
    const teamId = req.params.teamId; // Assuming you have a route parameter for teamId
  
    if (req.managerTeamId !== teamId) {
      return res.status(403).json({ error: 'Access denied' });
    }
  // move on to the next middleware in the stack
    next();
  }
  
  module.exports = { restrictToTeam}
  ;


  //A middleware function takes three parameters: req, res, and next.req represents the request object,
  // res is the response object, and next is a function to pass control to the next middleware.