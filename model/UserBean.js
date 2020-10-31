var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({

    name: {
        type: String
    },
    email: {
        type: String
    },
    age: {
        type: Number
    },
    gender:{
        type:String
    }
});
mongoose.model("User",userSchema)