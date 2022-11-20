const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb+srv://ansary29:moham29@myproject.12hak.mongodb.net/Employees?retryWrites=true&w=majority'


const app = express()

mongoose.connect(url,{useNewUrlParser:true})
const con = mongoose.connection

con.on('open', ()=> {
    console.log('database is connected...');
})

app.use(express.json());



const employeesRouter = require('./routes/employees')
app.use('/employees',employeesRouter)

app.listen(process.env.PORT || 5000,function(){
    console.log('Server Started');
})
