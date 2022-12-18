const login_service = require('../services/login.service');

class LoginController{
    login(req, res) {
        const mail = req.query.mail;
        const password = req.query.password;

        res.send(login_service.login(mail, password));
    }
}

module.exports = new LoginController();