const con = require("../models/dbcon");

module.exports={
        get: (req, res) => {
            var qry = "SELECT grade from mdl_assign_grades";
            con.query(qry, (err,result)=>{
                if(err) throw err;
                res.json(result);
            });
        }
}
