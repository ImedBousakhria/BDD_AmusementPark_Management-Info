
// middleware.js

const jwt = require('jsonwebtoken');

// Middleware to check if the user is authenticated
const authenticateUser = (req, res, next) => {
    // Get the token from the request header
    const token = req.header('Authorization');

    // Check if the token is present
    if (!token) {
        return res.status(401).json({ message: 'Access denied. Token not provided.' });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        // Attach the user information to the request object
        req.user = decoded.user;
        
        // Proceed to the next middleware or route handler
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid token.' });
    }
};

module.exports = {
    authenticateUser,
    
};