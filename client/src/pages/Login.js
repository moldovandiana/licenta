import React, { useEffect, useState } from "react";
import Axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Login.css';
import { ReactNotifications } from 'react-notifications-component';
import {Store} from "react-notifications-component";
import 'react-notifications-component/dist/theme.css'

function Login() {

  const navigate = useNavigate();

  const [usernamelogin, setUsernameLogin]= useState("");  
  const [passwordlogin, setPasswordLogin]= useState("");
  const [loginStatus, setLoginStatus]=useState("");

  Axios.defaults.withCredentials=true;
const logare=() =>{
  if(usernamelogin.trim() === "" || passwordlogin.trim() === ""){
    Store.addNotification({
      title: "Trebuie completate toate campurile pentru a avea acces la cont!",
      message: "",
      type : "danger",
      container: "center",
      insert:"top"
    })
   }
   else{

  Axios.post("http://localhost:3001/logare/api/logare", {
    username: usernamelogin, 
    password: passwordlogin
  }).then((response)=>{ 
      if(response.data.message){
        setLoginStatus(response.data.message);
      }else {
      console.log(response.data)
        setLoginStatus(navigate('/profile'));
        localStorage.setItem("user_id", response.data[0].iduser);  
      }
  })
}
};
      useEffect(()=>{
        Axios.get("http://localhost:3001/logare/api/logare").then((response)=>{
          if(response.data.loggedIn === true){
          //setLoginStatus(response.data.user[0].username);
         
          setLoginStatus(navigate('/profile')) }
        
          else {
          setLoginStatus(navigate('/login'));}
        })
      }, []);


  return (
      
  <div >
    <div className='logare'>
        <h5>Logare </h5>
        <input type="text" placeholder="Nume de utilizator" onChange={(e)=>
         {
           setUsernameLogin(e.target.value)
           }} />
        <input type="password" placeholder="Parola" onChange={(e)=>
         {
           setPasswordLogin(e.target.value)
           }} />

        <ReactNotifications />
        <button onClick={logare }> Logare </button>
      
      </div>
      <div className="Links">
      <Link to='registration'>Inregistreaza-te acum!</Link>
</div>

      <h1>{loginStatus}</h1>


</div>

  );
}

export default Login
