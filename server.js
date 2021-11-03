const express = require('express');
const app = express();
const dotenv = require('dotenv');
const colors = require('colors');
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });

connectDB();


app.get('/', (req, res) => {
    res.send('Olá, minhas finanças!')
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server runnig in ${process.env.PORT}`.yellow.bold));

process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red);
    // Close server & exit process
    server.close(() => process.exit(1));
  });