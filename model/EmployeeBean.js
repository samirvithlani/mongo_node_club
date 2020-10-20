var mongoose = require('mongoose')

var employeeSchema = new mongoose.Schema({

    name: {
        type: String
    },
    email: {
        type: String
    },
    age: {
        type: Number
    }
});
mongoose.model("Employee",employeeSchema)