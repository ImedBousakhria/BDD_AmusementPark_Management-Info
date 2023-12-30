const express = require('express');
const controller = require('./controller/user');

const router = express.Router();

// Login route
router.post('/login', controller.user);

router.get('/profile', middleware.authenticateUser, (req, res) => {
    // Access the user information from req.user
    res.json({ user: req.user });
});

router.post('/register',user.register)



module.exports = router;
