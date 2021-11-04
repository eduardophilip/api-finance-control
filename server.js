const express = require('express');
const app = express();
const dotenv = require('dotenv');
const colors = require('colors');
const connectDB = require('./config/db');


dotenv.config({ path: './config/config.env' });

connectDB();

// Require routes
const incomes = require('./routes/incomes');

// Routes
app.use('/api/v1/incomes', incomes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server runnig in ${process.env.PORT}`.yellow.bold));

process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red);
    // Close server & exit process
    server.close(() => process.exit(1));
  });