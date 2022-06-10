import React from 'react'
import {Link} from 'react-router-dom'; // importam link tag 
import BannerImage from '../imagini/cat.jpg';
import '../styles/Acasa.css';
import Contact from '@mui/icons-material/Phone';
import Email from '@mui/icons-material/Email';


function Acasa() {
  return (
    <div className="home"  style={{ backgroundImage: `url(${BannerImage})`}}>
    
      <div className="headerContainer" >

        <h1>Un animal sanatos, este un animal fericit!</h1>
        <p>Bunastarea animalului tau de companie este prioritatea noastra.</p>
  
        <div className='stylenumber'>
      
        <Contact />
        <p2>0236-265-223</p2>
        </div>

        <div className='email'>
      
        <Email />
        <p2>petclinic.com</p2>
        </div>

        <Link to ="/Programari">
          <button>Fa o programare!</button>
        </Link>
        <Link to="/services">
          <button>Servicii</button>
        </Link>
      </div>
    </div>
  )
}

export default Acasa;
