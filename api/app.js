const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
require('dotenv').config();
const mongoose = require('./mongoose').connect()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const routes = require('./routes/routes');
app.use('/api', routes);
module.exports = app;