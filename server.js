require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
require('./server/db-conn');
//const path = require('path');

const app = express();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Add Access Control Allow Origin headers
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  );
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );

  next();
});

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname });
});

app.use('/api/thoughts/', require('./server/routes/thoughts-route'));

const { PORT } = process.env;
app.listen(PORT, () => console.log(`Wizardry happening on port ${PORT}`));
