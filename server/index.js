require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const router = require('./routes.js')

const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use('/', router); // send request to routes

app.listen(port, () =>{
  console.log(`listening on port ${port}`);
});

// for testing
// module.exports = app;