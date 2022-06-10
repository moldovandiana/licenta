import React from 'react'
import ContactImage from "../imagini/dogi.jpeg"
import "../styles/Contact.css"
import emailjs from '@emailjs/browser';

function Contact() {


  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm("service_rnxb3u8","template_xampz7p", e.target, 'Kds6KgKLMv7xLnfG6').then(res=>{
      console.log(res);
    }).catch(err=>console.log(err));
  }
  return (
    <div className='contact'>

        <div className='leftSide' style={{ backgroundImage: `url(${ContactImage})`}}></div>


        <div className='rightSide'>
        <h1> Contact cabinet </h1>


<form id="contact-form" onSubmit={sendEmail}>
    <label htmlFor="name">Nume</label>
    <input name="name" placeholder='Introduceti numele complet..' type="text" />
    <label htmlFor="email">Email</label>
    <input name="user_email" placeholder='Introduceti emailul..' type="email" />
    <label htmlFor="message">Message</label>
    <textarea rows="6" placeholder='Mesaj' name='message' required>
        
    </textarea>
    <button type='submit'>Trimite mesajul</button>
    

</form>
</div>
</div>
  )
}

export default Contact
