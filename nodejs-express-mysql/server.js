const express = require('express');
const dotenv = require('dotenv');

dotenv.config = ({ path: './config/config.env' });

const app = express();
PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Serer is running with port: ${PORT}`);
});
