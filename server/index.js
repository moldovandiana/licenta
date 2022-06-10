// create express server
//configure the backend api

const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const port = process.env.PORT || 3001
const cookieParser = require('cookie-parser');
const session = require('express-session')
const bcrypt = require('bcrypt');
const saltRounds = 10;

app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST", "PUT" , "DELETE"],
  credentials: true // allow the cookie to be enable
}));

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));  /// or false
app.use(session({
  key: "userId", //name pf cookie i create
  secret: "salut",
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 60 * 60 * 24, //maintan loggin for 24 hours after it's created

  }

}))
app.use(bodyParser.json()) // pass json data to query
app.use(express.json())  /////if i request smth from frontend

// Routers 
const ServiceRouter = require('./routes/servicii');
app.use("/servicii", ServiceRouter);

const RegisterRouter = require('./routes/register');
app.use("/register", RegisterRouter);

const LogInRouter = require('./routes/logare');
app.use("/logare", LogInRouter);

const PetRouter=require('./routes/pets');
app.use("/pets", PetRouter);

const UseriRouter = require('./routes/useri');
app.use("/useri", UseriRouter);

const AppRouter=require('./routes/programari');
app.use("/programari", AppRouter);


// listen on eviorement port or 3001
app.listen(port, () => console.log(`running on port ${port}`));


