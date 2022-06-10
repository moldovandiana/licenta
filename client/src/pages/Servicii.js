import React from 'react';
import { ServiceList } from "../helpers/ServiceList"; // exportare/importare variabila folosim curly braces
import ServiceItem from '../components/ServiceItem';
import '../styles/Servicii.css';


function Servicii() { // loop through each item from list and create html for each item

  return (  //menuItem =obj
    <div className='service'>
        <h1 className='ServiceTitle'>Servicii</h1>
        <div className="ServiceList">{ServiceList.map((serviceItem, key)=>{
            return  <ServiceItem 
            key={key}
            image={serviceItem.image} 
            name={serviceItem.name} 
            description={serviceItem.description} /> 
        }
        )}</div>
      
    </div>
  )
}

export default Servicii
