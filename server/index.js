require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');

const port = process.env.PORT || 3000;

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.status(200).send('hello!');
});

app.listen(port, () =>{
  console.log(`listening on port ${port}`);
});