const mongooes = require('mongoose');
require('dotenv').config();

const DB = process.env.DB_URL;

mongooes.set('strictQuery', true);
mongooes.connect(DB).then(() => {
    console.log('db connection success');
}).catch(err => {
    console.log('db connecttion err:::', err);
});

