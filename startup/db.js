const mongoose = require('mongoose')


module.exports = () => {
    mongoose.connect('mongodb://localhost/customerDB', {
        

    }).then(console.log('MongoDB connected Successfully...'));
}