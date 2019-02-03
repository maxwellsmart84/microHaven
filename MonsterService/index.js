const express = require('express');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const dynamoose = require('dynamoose');
const { seedData } = require('./seedData');

const app = express();
app.use(bodyParser.json({ strict: false }));
seedData();


app.get('/', (req, res) => {
  res.send('Gloomhaven Glavin');
});

app.get('/monsters/:monsterId', (req, res) => {
  const { params: { monsterId } } = req;
  const monsterIdInt = parseInt(monsterId, 10);
});

module.exports.handler = serverless(app);
