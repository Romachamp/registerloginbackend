const fs = require('fs');
class Files {
    createFile(mail, password) {
        const filePath = process.cwd() + `/src/data/users/${mail}.txt`;
        const data = mail + '\n' + password + '\n';
        if(this.isFileExists(filePath)) {
            return false;
        } else {
            fs.appendFileSync(filePath, data,
                (err) => {
                    console.log(err)
                })
            return true;
        }

    }
    isFileExists(filePath) {
       return fs.existsSync(filePath);
    }

    readFile(filePath) {
        if(!this.isFileExists(filePath)) {
            return 'Sorry, your mail or password incorrect'
        } else {
            const fileInfo = fs.readFileSync(filePath).toString();
            return fileInfo.split('\n');
        }
    }
}

module.exports = new Files();