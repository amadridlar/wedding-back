require('colors');
const express = require('express');

const port = '3000';
const app = express();

app.get('/', (req, res) => {
  res.status(200);
  res.send({ status: '200', message: 'app is up' });
});

const server = app.listen(port, () => {
  console.log(`App is running on port ${port}`.green);
});

module.exports = app;
module.exports.server = server;
