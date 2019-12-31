const express = require('express');

//reading .env file
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.get('/', (req, res) => {
  res.send('hello');
  res.send('hello');
});

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
  console.log(`app is listening at port ${PORT}`);
});
