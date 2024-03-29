const express = require('express');
const app = express();
const dotenv = require('dotenv');
const colors = require('colors');
const connectDB = require('./config/db');
const cookieParser = require('cookie-parser');
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');
const morgan = require('morgan');
const errorHandler = require('./middleware/error')

dotenv.config({ path: './config/config.env' });

if(process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(mongoSanitize());
app.use(helmet());
app.use(xss());
app.use(hpp());
app.use(cors());


// Require routes
const incomes = require('./routes/incomes');
const expenses = require('./routes/expenses');
const savings = require('./routes/savings');
const searches = require('./routes/searches');
const category = require('./routes/category');
const storeYear = require('./routes/storeYears');
const months = require('./routes/months');
const auth = require('./routes/auth.route');

// Routes
app.use('/api/v1/incomes', incomes);
app.use('/api/v1/expenses', expenses);
app.use('/api/v1/savings', savings);
app.use('/api/v1/search', searches);
app.use('/api/v1/categories', category);
app.use('/api/v1/years', storeYear);
app.use('/api/v1/months', months);
app.use('/api/v1/auth', auth);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server runnig in ${process.env.PORT}`.yellow.bold));

process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red);
    server.close(() => process.exit(1));
});