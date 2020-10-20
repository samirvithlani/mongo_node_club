require('./model/db')
const express = require('express')
var app = express();
const path = require('path')
const hbs = require('hbs')
const bodypars = require('body-parser')

app.set('view engine','hbs')

app.use(bodypars.urlencoded({
    extended:true
}))
var employee = require('./controllers/EmployeeController')

app.use('',employee)

app.listen(3000,()=>{

    console.log("server stared.. on 3000")
})