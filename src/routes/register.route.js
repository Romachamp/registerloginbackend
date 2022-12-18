const express = require('express');

const router = express.Router();

const register_controller = require('../controllers/register.controller')

router.route('/').post(register_controller.register);

module.exports = router;