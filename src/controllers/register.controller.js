const register_service = require('../services/register.service');

class RegisterController {
    register(req, res) {
        const mail = req.query.mail;
        const password = req.query.password;

       res.send(register_service.createProfile(mail, password));
    }
}

module.exports = new RegisterController();