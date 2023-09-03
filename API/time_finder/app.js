const express = require('express');
const { Telegraf } = require('telegraf');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

const bot = new Telegraf(process.env.TELEGRAM_API_TOKEN);


const apiId = process.env.TELEGRAM_API_ID;
const apiHash = process.env.TELEGRAM_API_HASH;
const phoneNumber = process.env.TELEGRAM_PHONE_NUMBER;
// Define your Express routes and Telegram API interactions here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
