require('colors');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const guestsRoutes = require('./routes/gestsRoutes');

const port = '3000';
const app = express();

// MIDLEWARES
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ROUTES
app.use('/guests', guestsRoutes);

app.get('/', (req, res) => {
  res.status(200);
  res.send({ status: '200', message: 'app is up' });
});

const server = app.listen(port, () => {
  console.log(`App is running on port ${port}`.green);
});

module.exports = app;
module.exports.server = server;
