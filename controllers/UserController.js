const express = require('express')
const app = express.Router()
const mongoose = require('mongoose')
const { use } = require('./EmployeeController')
const User = mongoose.model('User')


app.post('/adduser', (req, res) => {

    adduser(req, res);
})


app.get('/getuser/:id', (req, res) => {

    var id = req.params.id;
    console.log(id)

    User.findById(id, (err, docs) => {

        if (!err) {

            res.send(docs)
        }
        else {

            res.send({ 'Error': "Problem in fetching Data." })
        }
    })

})

app.delete('/delete/:id', (req, res) => {

    User.findByIdAndRemove(req.params.id, (err, docs) => {

        if (!err) {

            res.send(docs)
        }
        else {

            res.send({ 'Error': "Problem in deleting Data." })
        }
    })

})
app.get('/getallusers', (req, res) => {

    User.find((err, docs) => {

        if (!err) {

            res.send(docs)
        }
        else {
            res.send({ 'Error': "Problem in fetching Data." })
        }
    })

})
function adduser(req, res) {

    var user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.age = req.body.age;
    use.gender = req.body.gender;

    user.save((err, docs) => {

        if (!err) {

            res.send(docs)
        }
        else {

            res.send({ 'Error': 'Error in adding document.' })
        }
    })

}

module.exports = app