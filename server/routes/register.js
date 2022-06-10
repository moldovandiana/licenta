//****************************USER
 // create a route in back-end

 const express=require("express"); 
 const router = express(); 

 const cookieParser= require('cookie-parser');
 const session = require('express-session')

 const bcrypt = require('bcrypt');
 const saltRounds = 10;
 var db = require('../config/dbconfig');
  
  

 router.post("/register", (req, res)=> // call http request
 {
 
  const nameuser=req.body.nameuser;
  const firstname=req.body.firstname;
  const email=req.body.email;
  const username=req.body.username;
  const password=req.body.password;
  const phonenumber=req.body.phonenumber;
  const idUser=req.body.iduser

   bcrypt.hash(password, saltRounds, (err, hash)=>{

     if(err) {
       console.log(err)
     }
      db.query("INSERT INTO users (nameuser, firstname, email,username, password, phonenumber, iduser) VALUES (?, ?, ? , ?, ?,?, ?)",
       [nameuser, firstname, email, username, hash, phonenumber, idUser], 
      (err, result)=>{
        console.log(result);  
      }); 
   })


   
 });


 module.exports=router