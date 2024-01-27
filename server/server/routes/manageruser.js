const { Router } = require('express');
const userController = require('../controller/userController');

const router = Router();

router.get('/signup', userController.signup_get);
router.post('/signup', userController.signup_post);
router.get('/login', userController.login_get);
router.post('/login', userController.login_post);
router.get('/logout', userController.logout_get);
module.exports = router;
