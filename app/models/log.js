const mongoose = require('mongoose')
const Schema = mongoose.Schema

const logSchema = new Schema({
     date : {
         type : String,
         required : true
    },
     time : {
         type : String,
        required : true
     },
     employee : {
         type : Schema.Types.ObjectId,
         required : true,
         ref : 'Employee'
     },
     project : {
         type : Schema.Types.ObjectId,
         required : true,
         ref : 'Project'
     }
})

const Log = mongoose.model('Log', logSchema)

module.exports = Log

