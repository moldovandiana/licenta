import React, {useState} from "react";
import petLogo from "../imagini/petLogo.png";
import { Link } from 'react-router-dom'; 
import ReorderIcon from '@mui/icons-material/Reorder';
import "../styles/Navbar.css";

function Navbar() {

const [openLinks, setOpenLinks]=useState(false);



const toggleNavbar = () =>{
  setOpenLinks(!openLinks)

}

  return (
    <div className="navbar">
        <div className="leftSide" id={openLinks ? "open" : "close"}>
          <Link to="/"> <h1>Clinica Vet</h1> </Link>
           <img src={petLogo} alt="description of img"/>
          

          <div className="hiddenLinks">
          <Link to="/"> Acasa </Link>
            <Link to="/services"> Servicii </Link>
            <Link to="/about"> Despre noi </Link>
            <Link to="/programari"> Programari </Link>
            <Link to="/contact"> Contact </Link>
           
            <Link to="/login"> Contul meu </Link>
           
          </div>
        </div>

        <div className="rightSide">
            <Link to="/"> Acasa </Link>
            <Link to="/services"> Servicii </Link>
            <Link to="/about"> Despre noi </Link>
            <Link to="/programari"> Programari </Link>
            <Link to="/contact"> Contact </Link>
            <Link to="/login"> Contul meu </Link>

            <button onClick ={toggleNavbar}>
            <ReorderIcon />
            </button>



        </div>


    </div>
  )
}

export default Navbar
