
const mysql = require('mysql');
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'new_database',
});
con.connect((err)=>{
    if (err) throw err;    
    console.log("DATABASE CONNECTED!!!");
})
module.exports = con; 