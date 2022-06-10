import React from 'react'; 
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Acasa from './pages/Acasa';
import Servicii from './pages/Servicii';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Programari from './pages/Programari';
import Register from './pages/Register';
import AdminServicii from './pages/AdminServicii';
import AdminUseri from './pages/AdminUseri';
import NewPet from './pages/NewPet';
import ProfilePet from './pages/ProfilePet';
import AdminProgramari from './pages/AdminProgramari';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Navigate } from "react-router-dom";

// <Route path='/logout' exact element={()=> <Acasa loggedIn={true}/>}/>
// <Route path='/profile' exact element={()=> <Profile loggedIn={false}/>}/>


function App() {

  

// *********************************************************
// <Router> // tell react that we have some routes in app
//<Routes>   //allow to render one route at eact time
  return (
    
      <div className="App">   
        
        <Router>      
        
        <Navbar />
        <Routes> 
          
            <Route path='/' exact element={<Acasa/>}/> 
            <Route path='/services' exact element={<Servicii/>}/>
            <Route path='/about' exact element={<About/>}/>
            <Route path='/contact' exact element={<Contact />}/>
            <Route path='/login' exact element={<Login />}/>
            <Route path='/profile' exact element={<Profile />}/>
            <Route path='/login/registration' exact element={<Register />}/>
            <Route path='/crudservices' exact element={<AdminServicii />}/>
            <Route path='/useri' exact element={<AdminUseri />}/>
            <Route path='/logout' exact element={()=> <Navigate to="/"  />}/>
            <Route path='/programari' exact element={<Programari />} />
            <Route path='/newpet' exact element={<NewPet />}/>
            <Route path='/profilepet' exact element={<ProfilePet />}/>
            <Route path='/adminprogramari' exact element={<AdminProgramari />}/>
            

        </Routes>    

        <Footer />
        
        </Router>



      </div>
  );
};

export default App;

