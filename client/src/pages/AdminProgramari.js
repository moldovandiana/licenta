import React,{useState, useEffect} from 'react';
import Axios from 'axios';
import './Programari';
import "../styles/Programari.css";

function AdminProgramari() {

    const [serviceName, setServiceName] = useState("");
    const [appList, setAppList]=useState([]);
    const [notes, setNotes]=useState("");
    const [datetime, setDateTime]=React.useState(new Date());
   
    useEffect(() => {
        Axios.get("http://localhost:3001/programari",{
          service:serviceName,
          notes:notes,
          datetime:datetime
        }).then((response) => {
          setAppList(response.data) 
        })
      },[]); 


      const deleteProgramare=(idprogramare)=>{
        Axios.delete(`http://localhost:3001/programari/${idprogramare}`);
      };
        
  return (
    <div className='programari'>
      {
    appList.map((val)=>{ //val = valoarea fiecarui elem din lista

    return (
           <div className='card' >
             
            <h1>{val.serviceName}</h1>
            <p>Data programarii  { new Date(val.datetime).toLocaleString()}</p>
            <p> Obervatii:  {val.clientNotes}</p>
            <button onClick={()=> {deleteProgramare(val.idprogramare);
            }} > Stergere  </button>
           </div>
           
            );
    })}
    </div>
  )
}

export default AdminProgramari
