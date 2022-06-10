import React from 'react'
import Dogo from "../imagini/dogo.jpeg"
import '../styles/About.css'
function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{ backgroundImage: `url(${Dogo})`}}> vdcfs</div>
        <div className='aboutBottom'>
            <h1>Despre noi</h1>
            <p> Cabinetul nostru a fost conceput din dragostea si daruirea noastra fata de animale. Experiență de peste 20 de ani în domeniul veterinar. Consultații și tratamente, alte operațiuni, specialiști în câini, pisici si animale exotice. Dorim sa oferim cele mai inalte servicii pentru animale.
            Misiunea noastra este de a ajuta si educa proprietarii de animale de companie, de a oferi diagnostice exacte si de a oferi cea mai buna ingrijire pentru companionii tai. </p>
            <h1>Echipa noastra</h1>
            <p3>Echipa noastra este formata din cei mai buni specialisti.</p3>
            <p2>Suntem dedicati sanatati si bunastarii animalelor,pentru ca ne pasa cu adevarat de acesta.</p2>
            <p1>Te asteptam sa ne cunoastem!</p1>
        </div>
        
      
    </div>
  )
}

export default About
