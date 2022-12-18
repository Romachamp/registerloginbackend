const express = require('express');

const router = express.Router();

const register = require('./register.route');
const login = require('./login.route');

router.use('/register', register);
router.use('/login', login);

module.exports = router;