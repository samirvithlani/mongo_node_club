require('./model/db')
require('./model/mysqldb')
const express = require('express')
var app = express();
const path = require('path')
const hbs = require('hbs')
const bodypars = require('body-parser')
const cors = require('cors')
app.use(cors())


app.set('view engine','hbs')
app.use(bodypars.urlencoded({
    extended:true
}))
var employee = require('./controllers/EmployeeController')
var user = require('./controllers/UserController');
var admin = require('./controllers/AdminController')
const { use } = require('./controllers/EmployeeController');

app.use('/employee',employee)
app.use('/user',user)
app.use('/admin',admin)

app.listen(3000,()=>{

    console.log("server stared.. on 3000")
})