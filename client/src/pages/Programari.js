import React,{useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import './AdminServicii';
 import "../styles/Programari.css";
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { ReactNotifications } from 'react-notifications-component';
import {Store} from "react-notifications-component";
import 'react-notifications-component/dist/theme.css'
import '../styles/Register.css';



function Programari() {

  
  const navigate = useNavigate();
  const [loginStatus, setLoginStatus]=useState("");
  const [serviceName, setServiceName] = useState("");
  const [serviceList, setServiceList] = useState([]); 
  const [appList, setAppList]=useState([]);
  const [notes, setNotes]=useState("");
  const [datetime, setDateTime]=React.useState(new Date());
 
  

  useEffect(()=>{
    Axios.get("http://localhost:3001/logare/api/logare").then((response)=>{
      if(response.data.loggedIn === true){
        
      setLoginStatus(navigate('/programari')) }
      else {
      setLoginStatus(navigate('/login'));}
    })

  }, []);
  
    useEffect(() => {
        Axios.get("http://localhost:3001/servicii",{
        service:serviceName,

        }).then((response) => {
          setServiceList(response.data) // in paranteza=ce obtinem de la req nostru
        })
    }, []);


    
    useEffect(() => {
      Axios.get("http://localhost:3001/programari",{
        service:serviceName,
        notes:notes,
        datetime:datetime
      }).then((response) => {

        setAppList(response.data) 
      })
    }, []);

  

    
    const submit =()=>{
      if(serviceName.trim() === "" || notes.trim() === ""){
        Store.addNotification({
          title: "Trebuie completate toate campurile!",
          message: "",
          type : "danger",
          container: "center",
          insert:"top"
        })
       }
       else{

      console.log(datetime);
      Axios.post("http://localhost:3001/programari", {

        name: serviceName,
        notes : notes,
        datetime:datetime,
        serviceName: serviceName,
        iduser: localStorage.getItem("user_id")
        
       
      }).then((response)=>{        
          console.log(response);
      })
      Store.addNotification({
        title: "S-a trimis programarea cu succes!",
        message: "",
        type : "success",
        container: "center",
        insert:"top"
      })

    }
      setAppList([
        ...appList, 
       {serviceName : serviceName, notes: notes, datetime: datetime},
     ]);
    };
  

 

  return (
    <div className='programari'>
      <h1>Fa-ti programare online chiar acum!</h1>



    <div className='crudservices' onChange={(e)=>{setServiceName(e.target.value)}} >
     <select className='select' >
       <option  >---Selecteaza un serviciu---</option>
       { serviceList.map((val)=> 
       <option >{val.name}</option> 
        )}
     </select>
     </div>

 <ReactNotifications />


       <div>
<LocalizationProvider dateAdapter={AdapterDateFns}>
<DateTimePicker
          renderInput={(params) => <TextField {...params} />}
          label="Ignore time in each day"
          value={datetime}
          onChange={(newValue) => {
            setDateTime(newValue);
          }}
          minutesStep={30}
          minTime={new Date(0, 0, 0, 8) }
          maxTime={new Date(0, 0, 0, 20) }
           form
        
        />
    </LocalizationProvider>
</div>

     <input type="text" placeholder="---Observatii---" name="clientNote" onChange={(e)=>{
               setNotes(e.target.value)}}/>
     
     <button onClick={submit}>Trimite</button>

     
     </div>   
  )
};

export default Programari
