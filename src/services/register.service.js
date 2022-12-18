const fs = require('fs');
const file_service = require('./file.service');
const check_service = require('./check.service');

class RegisterService {
    createProfile(mail, password) {
        if (check_service.mailCheck(mail) === false) {
            return 'Sorry, your mail incorrect';
        }
        if (check_service.passwordCheck(password) === false) {
            return 'Sorry, your password incorrect';
        }
        if (!file_service.createFile(mail, password)) {
            return 'Sorry, we already have the same user';
        }
        file_service.createFile(mail, password);
        return 'You successfully registered';
    }
}

module.exports = new RegisterService();