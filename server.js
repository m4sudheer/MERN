const express = require('express');
const connectDB = require('./config/db');
//reading .env file
const dotenv = require('dotenv');
dotenv.config();

const app = express();

//connect DB
connectDB();

//define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
  console.log(`app is listening at port ${PORT}`);
});
