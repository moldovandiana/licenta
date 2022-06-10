  import React, { useEffect, useState } from 'react'
  import Axios from 'axios'
  import { useNavigate, useParams } from 'react-router-dom';
  import Admin from '../components/Admin';
  import NormalUser from '../components/NormalUser';
  import  '../styles/Profile.css';
  import './Programari';
  import './AdminUseri';

  
function Profile() {

  
  const navigate = useNavigate();
  const [role, setRole]=useState("");
  const [status, setStatus]=useState("");
  const [loginStatus, setLoginStatus]=useState("");
  const [serviceName, setServiceName] = useState("");
  const [appList, setAppList]=useState([]);
  const [notes, setNotes]=useState("");
  const [datetime, setDateTime]=React.useState(new Date());
  const [userList, setUseriList] = useState([]);
  const [nameuser, setNameUser]=useState("");
  const [firstname, setFirstName]=useState("");
  const [usernameReg, setUsernameReg]= useState("");  
  const [passwordReg, setPasswordReg]= useState("");
  const [email, setEmail]=useState("");
  const [phonenumber, setNumber]=useState([0]);
  const [newPhoneNumber, setNewPhoneNumber] = useState("");


  useEffect(()=>{
    Axios.get("http://localhost:3001/logare/api/logare").then((response)=>{
      if(response.data.loggedIn === true){
        
      setLoginStatus(navigate('/profile' )) }
      else {
      setLoginStatus(navigate('/login'));}
    })

    Axios.get(`http://localhost:3001/programari/user/${localStorage.getItem("user_id")}`).then((response) => {
      console.log(response.data);
    })

    Axios.get(`http://localhost:3001/useri/user/${localStorage.getItem("user_id")}`).then((response) => {
      console.log(response.data);
    })

  }, []); 
  
  Axios.defaults.withCredentials=true;
  useEffect(()=>{
      Axios.get("http://localhost:3001/logare/api/logare").then((response)=>{
         if(response.data.loggedIn === true){
          setRole(response.data.user[0].role); 
        }
        })
  }, []) 

  Axios.defaults.withCredentials=true;
  useEffect(()=>{
      Axios.get("http://localhost:3001/logare/api/logare").then((response)=>{
         if(response.data.loggedIn === true){
          setStatus(response.data.user[0].username, response.data.user[0].nameuser);}
         
        }) }, []) 


        useEffect(() => {
          Axios.get(`http://localhost:3001/programari/user/${localStorage.getItem("user_id")}`,{
           
            notes : notes,
            datetime:datetime,
            serviceName: serviceName,
          }).then((response) => {
            setAppList(response.data) 
          })
        }); 

        useEffect(() => {
          Axios.get(`http://localhost:3001/useri/user/${localStorage.getItem("user_id")}`,{
           
            nameuser :nameuser,
            firstname : firstname,
            email : email,
             username: usernameReg, 
             password: passwordReg,
             phonenumber:phonenumber
          }).then((response) => {
            setUseriList(response.data) 
          })
        }); 

        const deleteProgramare=(idprogramare)=>{
          Axios.delete(`http://localhost:3001/programari/${idprogramare}`);
        };

        const updateUser=(username)=>{

          Axios.put("http://localhost:3001/useri", { 
            
          phonenumber: newPhoneNumber,
          username: username
        }).then((response)=>{
          setUseriList(userList.map((val)=>{
            return val.username === username 
            ? { 
              username : val.username,
              phonenumber : newPhoneNumber
             } 
            : val;                                                      // service from serviceList == service that we want to chenge te price
                                                                       // if name == one of we change then we actually return that 
                                                                      //element into the following object, which is a user with same info preaviously + that elem updated 
          }))                                                        // to see how modify in page after i clicked on button without refresh
        });
        };
    return (
        <div className='profile'> 
        < div className='center'>

        <h1> {status} </h1>
        {role === 'visitor' && <NormalUser />}
        {role === 'admin' && <Admin/>}
        </div>

        { userList.map((val)=>{ 

return (
   
         <div className='card'>
        <h1>Nume de utilizator: {val.username}</h1>
        <p>Nume: {val.nameuser}</p>
        <p>Prenume: {val.firstname}</p>
        <p>Email: {val.email}</p>
        <p>Telefon: {val.phonenumber}</p>
        <input type="text"  onChange={(e)=>{
               setNewPhoneNumber(e.target.value)}}/>
        <button1 onClick={()=> {updateUser(val.username);
            }}> Actualizare date </button1>
        </div>
        );
    })}
        

        {
           appList.map((val)=>{ 

    return (
           <div className='card' >
            <h1>{val.serviceName}</h1>
            <p>Data programarii  { new Date(val.datetime).toLocaleString()}</p>
            <p>{val.clientNotes}</p>
            <button2 className='buttonCard' onClick={()=> {deleteProgramare(val.idprogramare);
            }}> Anulare </button2>
           </div>
           
            );
    })}
        
        
      
        <button onClick={()=>navigate('/')}>Delogheaza-te</button>


        </div>
      );

  
}  

export default Profile
