const mongoose = require('mongoose')

const employeesSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    mobile:{
        type: Number,
        required:true
    },
    salary:{
        type: Number,
        required:true
    },
    address:{
        type: String,
        required:true
    },
    department:{
        type: String,
        required:true
    },
})

module.exports = mongoose.model('Employees',employeesSchema)