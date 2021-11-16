const fs = require('fs');
const connectDB = require('./config/db');
const colors = require('colors');
const dotenv = require('dotenv');

dotenv.config({ path: './config/config.env' });

const Month = require('./models/Month');

connectDB();

const months = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/months.json`, 'utf-8')
);

const importData = async () => {
  try {
    await Month.create(months);

    console.log('Data Imported...'.green.inverse);
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

const deleteData = async () => {
  try {
    await Month.deleteMany();

    console.log('Data Destroyed...'.red.inverse);
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

if (process.argv[2] === '-i') {
  importData();
} else if (process.argv[2] === '-d') {
  deleteData();
}