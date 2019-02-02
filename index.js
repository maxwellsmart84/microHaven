const express = require('express');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const dynamoose = require('dynamoose');

const app = express();

app.get('/', (req, res) => {
  res.send('Gloomhaven Glavin');
});

module.exports.handler = serverless(app);
