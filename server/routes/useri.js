const express = require("express");
const router = express();

var db = require("../config/dbconfig");

router.get("/",(req, res)=>{
    db.query("SELECT * FROM users", (err, result)=>{
        res.send(result);
    });
});

router.get("/user/:id",(req, res)=>{
    const idUser = req.params.id;
    db.query("SELECT * FROM users WHERE iduser = ?", idUser, (err, result)=>{
        res.send(result);
    });
  });

router.delete('/:username',(req, res)=>{
    const username=req.params.username//create variab with name servicee

    db.query("DELETE FROM users WHERE username=?", username, (err, result)=>{
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
    const username=req.body.username;
    const phonenumber=req.body.phonenumber;

    db.query(" UPDATE users SET phonenumber =? WHERE username =?", [phonenumber, username], (err,result)=>{
        if(err){
            console.log(err)
        }else {
            console.log(result);
        }
    });
});


module.exports = router