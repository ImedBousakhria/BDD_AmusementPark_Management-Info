// routes/employees.js
const express = require('express');
const isManager = require('../middleware/isManager');
const restrictToTeam = require('../middleware/restrictToTeam');

const router = express.Router();

// This is a protected route that requires authentication and checks if the user is a manager
router.get('/employees/:employeeId', isManager, restrictToTeam, (req, res) => {
  // Your route logic here
  res.json({ message: 'Access granted' });
});

module.exports = router;