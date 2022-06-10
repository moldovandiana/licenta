import React, { useState, useEffect } from 'react';
import './NewPet';
import Axios from 'axios';
import '../styles/NewPet.css';

import { useNavigate } from 'react-router-dom';

function ProfilePet() {
  
  const navigate = useNavigate();
  const [namepet, setNamePet]= useState("");  
  const [typepet, setTypePet ]= useState("");
  const [sizepet, setSizePet ]= useState("");  
  const [breedpet, setBreedPet]= useState("");
  const [gender, setGender]=useState("");
  const [petList, setPetList]=useState([]);
 
  
  const [loginStatus, setLoginStatus]=useState("");

  useEffect(()=>{
    Axios.get("http://localhost:3001/logare/api/logare").then((response)=>{
      if(response.data.loggedIn === true){
        
      setLoginStatus(navigate('/profilepet')) }
      else {
      setLoginStatus(navigate('/login'));}
    })
    
      Axios.get(`http://localhost:3001/pets/pets/${localStorage.getItem("user_id")}`).then((response) => {
        console.log(response.data);
      })

  }, []); 



useEffect(() => {
  Axios.get(`http://localhost:3001/pets/pets/${localStorage.getItem("user_id")}`,{
    name: namepet,
    type : typepet,
    size: sizepet,
    breed : breedpet,
    gender: gender
  }).then((response) => {
    setPetList(response.data) 
  })
}); 

const deletePet=(idpet)=>{
  Axios.delete(`http://localhost:3001/pets/${idpet}`);
};


return (
  <div className="profilepet">
    <div className="newpet">
      <h1>Animalele mele</h1>
   
    
    {
  petList.map((val)=>{ //val = valoarea fiecarui elem din lista

  return (
  <div className='card' >
 
        <p>Nume :  {val.name}</p>
        <p>Tip:  {val.type}</p>
        <p> Marime:  {val.size}</p>
        <p> Rasa:  {val.breed}</p>
        <p> Gen:  {val.gender} </p>
        <button2 onClick={()=> {deletePet(val.idpet);
            }}> Stergere profil animal </button2>
  </div>
)})
  }
   
</div>
</div>
)
}

export default ProfilePet
