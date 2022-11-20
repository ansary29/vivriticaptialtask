const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/Employees'


const app = express()

mongoose.connect(url,{useNewUrlParser:true})
const con = mongoose.connection

con.on('open', ()=> {
    console.log('database is connected...');
})

app.use(express.json());



const employeesRouter = require('./routes/employees')
app.use('/employees',employeesRouter)

app.listen(5000,function(){
    console.log('Server Started');
})