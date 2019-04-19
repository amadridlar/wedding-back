const color = require('colors');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const rootRoutes = require('./routes/rootRoutes');
const guestsRoutes = require('./routes/gestsRoutes');


const databaseHost = 'localhost';
const serverPort = '3000';
const app = express();

// MIDLEWARES
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ROUTES
app.use('/', rootRoutes);
app.use('/guests', guestsRoutes);

// DATABASE
mongoose.connect(`mongodb://${databaseHost}/wedding-app`);

const server = app.listen(serverPort, () => {
  console.log(color.green(`App is running on port ${serverPort}`));
});

module.exports = app;
module.exports.server = server;
