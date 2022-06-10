import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import '../styles/AdminServicii.css';
import { ReactNotifications } from 'react-notifications-component';
import {Store} from "react-notifications-component";
import 'react-notifications-component/dist/theme.css'

function AdminServicii() {

  
  const [serviceName, setServiceName] = useState("");
  const [servicePrice, setServicePrice] = useState("");
  const [serviceList, setServiceList] = useState([]); // parant patrate = un sir
  const [newPrice, setNewPrice] = useState("");

 /* const GetAll = () => {
    Axios.get("http://localhost:3001/servicii").then((response) => {
      setServiceList(response.data) // in paranteza=ce obtinem de la req nostru
    })
  } */

  useEffect(() => {
    Axios.get("http://localhost:3001/servicii",{
      service:serviceName
    }).then((response) => {
      setServiceList(response.data) 
    })
  });
  

  const addService = () => {

    if(serviceName.trim() === "" || servicePrice.trim() === "" ){
      Store.addNotification({
        title: "Trebuie completate toate campurile pentru adaugarea unui serviciu!",
        message: "",
        type : "danger",
        container: "center",
        insert:"top"
      })
     }
     else{
    // axios request, a post request on axios sending whatever information(moviename, review) to backend
    Axios.post("http://localhost:3001/servicii",
      {
        service: serviceName, //din stg sunt din app.js si dr din index.js
        price: servicePrice
      }).then((response) => {
        console.log(response);
      })

      Store.addNotification({
        title: "Serviciu adaugat!",
        message: "",
        type : "success",
        container: "center",
        insert:"top"
      })

      setServiceList([
        ...serviceList, 
       {serviceName : serviceName, price: servicePrice},
     ]);
    };
  };

    const deleteService=(service)=>{
      Axios.delete(`http://localhost:3001/servicii/delete/${service}`);
    };
 

  
    const updatePrice=(name)=>{

      Axios.put("http://localhost:3001/servicii", { 
        
      price: newPrice,
      name: name
    }).then((response)=>{
      setServiceList(serviceList.map((val)=>{
        return val.name === name 
        ? { 
          name : val.name,
           price : newPrice
         } 
        : val;                                                      // service from serviceList == service that we want to chenge te price
                                                                   // if name == one of we change then we actually return that 
                                                                  //element into the following object, which is a user with same info preaviously + that elem updated 
      }))                                                        // to see how modify in page after i clicked on button without refresh
    });
    };
 
 
   

  return (
    <div className='servicii'>

      <label>Denumire serviciu:</label>
     
      <input type="text" name="serviceName" onChange={(e) => {
        setServiceName(e.target.value);
      }} />
      
      <label>Pret serviciu:</label>
      <input type="text" name="servicePrice" onChange={(e) => {
        setServicePrice(e.target.value);
      }} />
       
      <button onClick={addService}>Adauga serviciu</button>
      <ReactNotifications />
      {
    serviceList.map((val)=>{ //val = valoarea fiecarui elem din lista

    return (
           <div className='card' >
             <div>
            <h1>{val.name}</h1>
            <p>{val.price}</p>
            </div>
            <div>

            <input type="text"  onChange={(e)=>{
               setNewPrice(e.target.value)}}/>
               <button onClick={()=> {updatePrice(val.name)}}>Actualizare</button>

               <button onClick={()=> {deleteService(val.name);
            }} > Stergere  </button>
  </div>
   </div>
           
     );
    })}
    </div>
   
  );
 
  };


export default AdminServicii