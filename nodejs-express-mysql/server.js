const express = require('express');
const dotenv = require('dotenv');

const userRouter = require('./routes/user.js');

dotenv.config = ({ path: './config/config.env' });

const app = express();
PORT = process.env.PORT || 5000;

app.use('/api/v1/users', userRouter);

app.listen(PORT, () => {
  console.log(`Serer is running with port: ${PORT}`);
});
