import React from "react";
import { useNavigate} from 'react-router-dom';
import '../styles/NormalUser.css';
import '../styles/Navbar.css';
import '../pages/NewPet';

 // show user profile  ===get username, name, firstname, phone
  // show pet profile=== get name, size, type, breed
function NormalUser() {

    const navigate = useNavigate();
   
   
      


  return (
    <div className="normaluser">
     
      <button1  onClick={()=>navigate('/NewPet')}>Adauga animal</button1>
      <button1 onClick={()=>navigate('/ProfilePet' )}>Profil animal</button1>
     
</div>

  )
}

export default NormalUser
