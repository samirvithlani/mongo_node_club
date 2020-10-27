const express = require('express')
const app = express.Router()
const mongoose = require('mongoose')
const Employee = mongoose.model('Employee')


app.get('/', (req, res) => {
    res.render('addEmployee', {
        "title": "add Employee Page.."
    })
})
app.post('/addemp', (req, res) => {

    insertEmployee(req, res);

})
app.get('/list', (req, res) => {

    Employee.find((err, docs) => {
        if (!err) {

            res.render('employeeList', {
                list: docs
            })
        }
        else {

            console.log("error in data fetching..")
        }
    })
})

app.get('/getdatabyid/:id', (req, res) => {

    Employee.findById(req.params.id, (err, docs) => {
        if (!err) {
            res.render('employeedetail', {
                emp: docs
            })
        }
    })

})
app.get('/delete/:id',(req,res)=>{

    
    Employee.findByIdAndRemove(req.params.id,(err,docs)=>{

        if(!err){

            res.redirect('/list')
        }

    })

})

function insertEmployee(req, res) {

    var employee = new Employee();
    employee.name = req.body.name;
    employee.email = req.body.email;
    employee.age = req.body.age;
    employee.save((error, success) => {

        if (!error) {

            res.redirect('/list')
        }
        else {
            console.log("data not inserted..")
        }

    });


}

module.exports = app;