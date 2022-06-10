const express = require("express");
const router = express();

const cookieParser = require('cookie-parser');
const session = require('express-session')

const bcrypt = require('bcrypt');
const saltRounds = 10;

var db = require('../config/dbconfig');


router.get("/api/logare", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user })
  } else {
    res.send({ loggedIn: false })
  }
});


router.post("/api/logare", (req, res) => {


  const username = req.body.username;
  const password = req.body.password;


  //make query to insert user in db
  db.query("SELECT * FROM users WHERE username= ?; ",
    username,
    (err, result) => { //when select username that we pass in front, it is searh in db

      if (err) {
        res.send({ err: err })

      }
      if (result.length > 0) {

        bcrypt.compare(password, result[0].password, (error, response) => {
          if (response) {

            req.session.user = result; //create session = whatever user get from db
            console.log(req.session.user);
            res.send(result)
          } else
            res.send({ message: "Wrong username/password combination!" });
        })

      } else {
        res.send({ message: "User doesn't exist!" });

      }

    });
});

module.exports = router