import React, { useState, useEffect } from 'react';
import '../styles/NewPet.css';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ReactNotifications } from 'react-notifications-component';
import {Store} from "react-notifications-component";
import 'react-notifications-component/dist/theme.css'

// CRUD cu info despre pets + edit + delete
function NewPet() {
   
      const navigate = useNavigate();
    const [namepet, setNamePet]= useState("");  
    const [typepet, setTypePet ]= useState("type");
    const [sizepet, setSizePet ]= useState("size");  
    const [breedpet, setBreedPet]= useState("");
    const [loginStatus, setLoginStatus]=useState("");
    const [gender, setGender]=useState();
    const [petList, setPetList]=useState([]);

   
  
   
    useEffect(()=>{
      Axios.get("http://localhost:3001/logare/api/logare").then((response)=>{
        if(response.data.loggedIn === true){
          
        setLoginStatus(navigate('/NewPet')) }
        else {
        setLoginStatus(navigate('/login'));}
      })
  
    }, []);
   

    const addpet=() =>{

      if(namepet.trim() === "" || typepet.trim() === "" || sizepet.trim() === "" ||  breedpet.trim()===""  || gender.trim() === ""){
        Store.addNotification({
          title: "Trebuie completate toate campurile!",
          message: "",
          type : "danger",
          container: "center",
          insert:"top"
        })
       }
       else{


        Axios.post("http://localhost:3001/pets", {

          name: namepet,
          type : typepet,
          size: sizepet,
          breed : breedpet,
          gender: gender,
          iduser: localStorage.getItem("user_id")
          
         
        }).then((response)=>{        
            console.log(response);
        }) 
        Store.addNotification({
          title: "S-a creat profilul animalului!",
          message: "",
          type : "success",
          container: "center",
          insert:"top"
        })
       
        setPetList([
          ...petList, 
         {name : namepet, type: typepet, size:sizepet, gender: gender},
       ]);
      };
    };
      

    // button cu post sa adauge la baza de date info despre animal
  return (
    <div className='newpet'>
      
      <ReactNotifications />
      <h1>Animal nou </h1>
      <div className='form'>
      
      <label>Nume</label>    
      <input type="text" name="namepet" onChange={(e) => {
        setNamePet(e.target.value);
      }} />

      
        <label>Tip</label>
      <div className='dropdown'>
          <select  className='select' value={typepet} onChange={(e)=>{setTypePet(e.target.value)}}>
              <option placeholder='Type'>---Type---</option>
              <option>Cat</option>
              <option>Dog</option>
          </select>
      </div>
      
     <label>Marime</label> 
     
     <div className='dropdown'>
     <select className='select'  value={sizepet} onChange={(e)=>{setSizePet(e.target.value)}}>
              <option >---Size---</option>
              <option>Small</option>
              <option>Medium</option>
              <option>Big</option>
          </select>
     </div>

     <label>Rasa</label> 
      <input type="text"  name="breedpet" onChange={(e) => { setBreedPet(e.target.value);
      }} />

      
      <div className='gender'>
       <label>Gen</label>
      <input type='radio' name='gender' value='Male' onChange={(e) => { setGender(e.target.value);
      }} />Mascul
       <input type='radio' name='gender' value='Female' onChange={(e) => { setGender(e.target.value);
      }} /> Femela
      </div>
      

      <button onClick={addpet} >Adauga animal</button>
     
      </div>
  </div>
)
    }
export default NewPet