const express = require('express');
const path = require('path')

// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(express.urlencoded({ extended: false }));

// Routes
app.use(require('./routes/routes'))

module.exports = app;