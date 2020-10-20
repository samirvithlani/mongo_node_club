const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/club1",{useUnifiedTopology:true},(error,sucess)=>{

    if(error){
        console.log("not connected to database..")
    }
    else{
        console.log("connected to database..")

    }
})

require('./EmployeeBean')