const express = require("express");
const router = express();

var db = require("../config/dbconfig");

function CorrectDate(currentdata) {
   return [currentdata.getFullYear(),
    currentdata.getMonth()+1,
    currentdata.getDate(),
    ].join('-')+' '+
    [currentdata.getHours(),
    currentdata.getMinutes(),
    currentdata.getSeconds()].join(':');
}


router.get("/",(req, res)=>{
    db.query("SELECT * FROM programari", (err, result)=>{
        res.send(result);
    });
});

router.get("/user/:id",(req, res)=>{
    const idUser = req.params.id;
    db.query("SELECT * FROM programari WHERE iduser = ?", idUser, (err, result)=>{
        res.send(result);
    });
});


router.post("/", (req, res) => {
    const notes = req.body.notes;
    const datetime =req.body.datetime;
    const serviceName = req.body.serviceName;
    const idUser = req.body.iduser;
    let dateObject = new Date(datetime);

    dateModified = CorrectDate(dateObject);
    console.log("Final data", dateModified)
    db.query(
        "INSERT INTO programari (clientNotes, datetime, serviceName, iduser) VALUES (?, ?, ?, ?)",
        [notes, dateModified, serviceName, idUser],
        (err, result) => {
            console.log(err);
        }
        );
        
    }
);


router.delete('/:idprogramare',(req, res)=>{
    const idprogramare=req.params.idprogramare//create variab with name servicee

    db.query("DELETE FROM programari WHERE idprogramare=?", idprogramare, (err, result)=>{
        if(err){
        console.log(err);
    }else{
        res.send(result);
    }
});
 }
 );   

module.exports = router;