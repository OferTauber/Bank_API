const express = require('express');
const cors = require('cors');
const route = require('./src/route');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.text());
app.use('/', route);

app.listen(PORT, (req, res) => {
  void req, res;
  console.log('Listen to port: ' + PORT);
});
