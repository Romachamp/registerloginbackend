const fs = require('fs');
const file_service = require('./file.service');

class LoginService {
    login(mail, password) {
        const filePath = process.cwd() + `/src/data/users/${mail}.txt`;
        const fileInfo = file_service.readFile(filePath);
        if (!(fileInfo[0] === mail && fileInfo[1] === password)) {
            return 'Sorry, your password or mail incorrect'
        } else {
            return 'You successfully login';
        }

    }
}

module.exports = new LoginService();