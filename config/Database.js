const mongoose = require('mongoose')

const configureDB = () => { 
    mongoose.connect('mongodb://localhost:27017/abcd', { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('connected to db')
        })
        .catch((err) => {
            console.log(err)
        })
}
module.exports = configureDB