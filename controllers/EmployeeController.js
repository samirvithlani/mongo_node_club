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
app.get('/list',(req,res)=>{

    res.send("data inserted")
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