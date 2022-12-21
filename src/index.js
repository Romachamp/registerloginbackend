const express = require('express');

const app = express();

const main_route = require('./routes/main.route');

const cors=require("cors");
const corsOptions ={
    origin:'*',
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration

const PORT = process.env.PORT || 3030;

app.use('/api', main_route);

app.listen(PORT, function (e) {
    console.log('server started');
});