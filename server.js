const express = require('express');
const userRouter = require('./routes/user.js');
const Logger = require('./middleware/log');
const dotenv = require('dotenv');
dotenv.config = { path: './config/config.env' };
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

PORT = process.env.PORT || 3000;

const logger = new Logger();
app.use(logger.middleware());

app.use('/api/v1/users', userRouter);

app.listen(PORT, () => {
  console.log(`Serer is running with port: ${PORT}`);
});
