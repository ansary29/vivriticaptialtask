const express = require('express');
const res = require('express/lib/response');
const router = express.Router()
const Employees = require('../models/employees')

router.get('/',async(req,res)=>{
    try{
        const employees = await Employees.find()
        res.json(employees)
    }
    catch(err){
        res.send('Error' + err)     
    }
})
router.get('/:id',async(req,res)=>{
    try{
        const employees = await Employees.findById(req.params.id)
        res.json(employees)
    }
    catch(err){
        res.send('Error' + err)     
    }
})
router.post('/', async(req,res)=>{
   const employee = new Employees({
       name: req.body.name,
       mobile: req.body.mobile,
       salary: req.body.salary,
       address: req.body.address,
       department:req.body.department,
   })
   try{
    const e1 = await employee.save()
    res.json(e1)
    }
   catch(err){
    res.send('Error' + err)     
   }
})
router.patch('/:id',async(req,res)=>{
    try{
        const _id = req.params.id;
        const updateemployees = await Employees.findByIdAndUpdate(_id, req.body,{
            new:true
        })
        res.send(updateemployees)
    }
    catch(err){
        res.send('Error' + err)     
    }
})
router.delete('/:id',async(req,res)=>{
    try{
        const deleteemployees = await Employees.findByIdAndDelete(req.params.id)
        if(!req.params.id){
            return res.status(500).send();
        }
        res.send(deleteemployees)
    }
    catch(err){
        res.send('Error' + err)     
    }
})

module.exports = router