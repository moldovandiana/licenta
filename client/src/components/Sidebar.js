import React from "react";
import "../styles/Admin.css";
import { Link } from 'react-router-dom'; 


function Sidebar() {

  return (
    <div className="Sidebar">

        <div >
          <Link to="/crudservices"> Servicii </Link>
            <Link to="/adminprogramari">  Programari </Link>
            <Link to="/useri">  Utilizatori </Link>
    
           
          </div>
    
      </div>
    
  );
}

export default Sidebar;