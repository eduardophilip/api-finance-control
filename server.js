const express = require('express');
const app = express();
const dotenv = require('dotenv');
const colors = require('colors');
const connectDB = require('./config/db');
const morgan = require('morgan');

dotenv.config({ path: './config/config.env' });

if(process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

connectDB();

app.use(express.json());

// Require routes
const incomes = require('./routes/incomes');

// Routes
app.use('/api/v1/incomes', incomes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server runnig in ${process.env.PORT}`.yellow.bold));

process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red);
    server.close(() => process.exit(1));
});