const express = require('express');
const app = express();
const dotenv = require('dotenv');
const colors = require('colors')

dotenv.config({ path: './config/config.env' });


app.get('/', (req, res) => {
    res.send('Olá, minhas finanças!')
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server runnig in ${process.env.PORT}`.yellow.bold))