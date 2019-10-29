const mongoose = require('mongoose');
const URL = process.env.DB || 'mongodb:27017/';

mongoose.connect(URL, {useNewUrlParser:true}).then(() => {
    console.log('Database is connect on Url: ',URL);    
}).catch((err) => {
    console.log('Something went wrong on database:\n', err);
    close();
});

module.exports = mongoose;
