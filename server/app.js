const express = require('express');
const cors = require('cors');
const route = require('./src/route');
const path = require('path');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.text());
app.use(express.json());
app.use('/', route);
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('/*', (req, res) => {
  void req;
  res.sendFile(path.join(__dirname + '../client/build/index.html'));
});

app.listen(PORT, (req, res) => {
  void req, res;
  console.log('Listen to port: ' + PORT);
});
