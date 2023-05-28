const mongooes = require('mongoose');

const DB = '';

mongooes.set('strictQuery', true);
mongooes.connect(DB).then(() => {
    console.log('db connection success');
}).catch(err => {
    console.log('db connecttion err:::', err);
});

