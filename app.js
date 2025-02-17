const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const userRoute = require('./routes/user.routes');

app.use(bodyParser.json()); //postman request 
app.use(cors());

app.use('/user', userRoute);

module.exports = app;