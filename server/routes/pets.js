const express=require("express"); 
const router = express(); 
var db = require('../config/dbconfig');
  


router.get("/pets/:id",(req, res)=>{
  const idUser = req.params.id;
  db.query("SELECT * FROM pets WHERE iduser = ?", idUser, (err, result)=>{
      res.send(result);
  });
});


 router.post("/", (req, res)=> // call http request
 {
 
   const name=req.body.name;
   const type=req.body.type;
   const size=req.body.size;
   const breed=req.body.breed;
   const gender=req.body.gender;
   const idUser=req.body.iduser


      db.query("INSERT INTO pets (name, type, size, breed, gender, iduser) VALUES (?, ?, ?, ?, ?, ?)", 
      [name, type, size, breed, gender, idUser], 
      (err, result)=>{
        console.log(err);
      }); 
   });

   router.delete('/:idpet',(req, res)=>{
    const idpet=req.params.idpet//create variab with name servicee

    db.query("DELETE FROM pets WHERE idpet=?", idpet, (err, result)=>{
        if(err){
        console.log(err);
    }else{
        res.send(result);
    }
});
 }
 );   

 module.exports=router