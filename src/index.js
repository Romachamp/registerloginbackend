const express = require('express');

const app = express();

const main_route = require('./routes/main.route');

app.use('/api', main_route);

app.listen(443, function (e) {
    console.log('server started');
});