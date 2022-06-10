import React, { useState } from "react";
import Axios from 'axios';
import {Link } from 'react-router-dom';
import { ReactNotifications } from 'react-notifications-component';
import {Store} from "react-notifications-component";
//import "animate.css";
import 'react-notifications-component/dist/theme.css'
import '../styles/Register.css';


function Register() {

    Axios.defaults.withCredentials=true;
    const [nameuser, setNameUser]=useState("");
    const [firstname, setFirstName]=useState("");
    const [usernameReg, setUsernameReg]= useState("");  
    const [passwordReg, setPasswordReg]= useState("");
    const [email, setEmail]=useState("");
    const [alertVisible, setAlertVisible]=useState(false);
    const [phonenumber, setNumber]=useState([0]);
    const [error, setError]=useState("");



    const register=() =>{

       if(firstname.trim() === "" || nameuser.trim() === "" || email.trim() === "" || usernameReg.trim()===""  || passwordReg.trim() === ""){
        Store.addNotification({
          title: "Trebuie completate toate campurile!",
          message: "",
          type : "danger",
          container: "top-center",
          insert:"top"
        })
       }
       else{
        Axios.post("http://localhost:3001/register/register", {

           nameuser :nameuser,
           firstname : firstname,
           email : email,
           username: usernameReg, 
           password: passwordReg,
           phonenumber:phonenumber
         }).then((response)=>{        
            console.log(response);
         })
         Store.addNotification({
          title: "S-a creat cont nou!",
          message: "",
          type : "success",
          container: "top-center",
          insert:"top"
        })
       }

      
        
      };
      
  return (
    <div >
      <div className='registration'>
      <h6 >Inregistrare</h6>
      <label className="a">Nume</label>
      <input type="text" onChange={(e)=>
         {
           setNameUser(e.target.value)
           }} />
           <label className="a">Prenume</label>
      <input type="text" onChange={(e)=>
         {
           setFirstName(e.target.value)
           }} />
           <label className="a">Email</label>
      <input type="text" onChange={(e)=>
         {
           setEmail(e.target.value)
           }} />
     

      <label className="a">Nume utilizator</label>
      <input type="text" onChange={(e)=>
         {
           setUsernameReg(e.target.value)
           }} />

      <label className="a">Parola</label>
      <input type="password" onChange={(e)=>
         { 
           setPasswordReg(e.target.value)
           }}/>
           <label className="a">Telefon</label>
      <input type="text" onChange={(e)=>
         {
           setNumber(e.target.value)
           }} />
      <button onClick={register}>Inregistrare</button>
      <Link to='/login'> Inapoi </Link>

      <ReactNotifications />
    </div>
    
      
    </div>
    
  )
}

export default Register
