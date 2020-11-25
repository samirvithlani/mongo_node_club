const express = require('express')
const app = express.Router();
const joi = require('@hapi/joi');
const chalk = require('chalk');

function validateStudent(student) {

    const studentSchema = joi.object({

        studentname: joi.string().min(3).max(10),
        birthdate: joi.date(),
        studentemail: joi.string().email(),
        mobile:joi.string().regex(/[789]{1}[0-9]{9}/)

    })
    return studentSchema.validate(student)
}

app.post('/addstudent', (req, res) => {

    var student = {
        studentname: req.body.studentname,
        studentemail: req.body.studentemail,
        birthdate: req.body.birthdate,
        mobile:req.body.mobile
    }
    result = validateStudent(student)
    
        if (result.error) {
    
            res.status(422).send({ error: result })
        }
        else {
    
            res.status(201).send({ data: student })
        } 


})

module.exports = app