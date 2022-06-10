import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import '../styles/AdminServicii.css';
import './Login';
import '../styles/AdminUseri.css'

function AdminUseri() {
  

    const [userList, setUseriList] = useState([]);
    const [username, setUsername]=useState("");
    
    useEffect(() => {
        Axios.get("http://localhost:3001/useri",{
        user:username,
   
     
        }).then((response) => {
          setUseriList(response.data) // in paranteza=ce obtinem de la req nostru
        })
    });

    const deleteUseri=(username)=>{
        Axios.delete(`http://localhost:3001/useri/${username}`);
      };
   
     
  return (
    <div className='useri'>
        <h1>Lista de utilizatori</h1>
       
    { userList.map((val)=>{ 

    return (
         <div className='card' >
             <div  >
            <h1>{val.username}</h1>
            <p>{val.nameuser}</p>
            <p>{val.firstname}</p>
            <p>{val.email}</p>
            <p>{val.phonenumber}</p>
            </div>
         <div>
         <button onClick={()=> {deleteUseri(val.username);
            }} > Stergere </button>
         </div>
         

        </div>
            );
    })}
    </div>
  )
}

export default AdminUseri
