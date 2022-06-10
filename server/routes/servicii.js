const express = require("express");
const router = express();

var db = require("../config/dbconfig");

router.get("/",(req, res)=>{
    db.query("SELECT * FROM services", (err, result)=>{
        res.send(result);
    });
});

router.post("/", (req, res) => {
    const name = req.body.service;
    const price = req.body.price

    //make query to insert user in db
    db.query(
        "INSERT INTO services ( name, price) VALUES ( ?, ?)",
        [ name, price],
        (err, result) => {
            console.log(err);
        }
        );
    }
);


 router.delete('/delete/:service',(req, res)=>{
    const service=req.params.service//create variab with name servicee

    db.query("DELETE FROM services WHERE name=?", service, (err, result)=>{
        if(err){
        console.log(err);
    }else{
        res.send(result);
    }
});
 }
 );   


router.put('/',(req,res)=>
{
    const name=req.body.name;
    const price=req.body.price;

    db.query(" UPDATE services SET price =? WHERE name =?", [price, name], (err,result)=>{
        if(err){
            console.log(err)
        }else {
            console.log(result);
        }
    });
});

module.exports = router;
