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
var fileuploading = require('./controllers/FileUpoadController')
var student = require('./controllers/student')

app.use('/employee',employee)
app.use('/user',user)
app.use('/admin',admin)
app.use('/file',fileuploading)
app.use('/student',student)

app.listen(3000,()=>{

    console.log("server stared.. on 3000")
})