var dbConn = require('../model/mysqldb')
const express = require('express')
const app = express.Router();

app.post('/addadmin',(req,res)=>{

    let admin = {aname:req.body.aname,aemail:req.body.aemail,apassword:req.body.apassword,agender:req.body.agender}
    let sql = "insert into admin SET ?"
    let query = dbConn.query(sql,admin,(err,success)=>{
        if(!err){

            //store int if check >0
            console.log(success.affectedRows)
            res.status(201).send(success)
        }
        else{
            res.status(204).send({"Error":"Admin not inserted.."})
        }
    })
})

app.get('/getalladmins',(re,res)=>{

    let query = dbConn.query("select * from admin",(err,data)=>{

        if(!err){
            res.send(data)
        }
        else{

            res.status(400).send({"ERROR":"problem in fetching Data.."})
        }
    })
})

app.get('/getdatabyid/:id',(req,res)=>{

    let query = dbConn.query("select * from admin where aid ='"+req.params.id+"'",(err,data)=>{

            if(!err){

                res.send(data)
            }
            else{

                throw err;
            }

    })

})
app.delete('/deletadmin/:id',(req,res)=>{

    let query = dbConn.query("delete from admin where aid = '"+req.params.id+"'",(err,scu)=>{

        if(!err){

            affectedRows = scu.affectedRows;
            res.send({"status":affectedRows})
        }
        else{

            res.send("error")
        }
    })
})

module.exports =app