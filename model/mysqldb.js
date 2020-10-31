const mysql = require('mysql')

const dbConn = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'hem'

});
dbConn.connect((err, success) => {

    //if(err) throw err;
    if (err) {

        throw err;
    }
    else {

        console.log("data base connected successfuly..")
    }
})
//connection..
module.exports = dbConn