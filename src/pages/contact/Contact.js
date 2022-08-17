import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className='contact'>
        <div className="contact-container">
        <h1><i className="fa-solid fa-location-dot"/>VILLE DE BOKIDIAWÉ</h1>
        <span>Bokidiawé</span>
        <br />
        <span>36008 Bokidiawé</span>
        <br />
        <br /> 
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7674.865440611555!2d-13.4930563!3d15.886385249999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xef2a64dca03ab11%3A0xae68957f8711084e!2zQm9raSBEaWF2LCBTw6luw6lnYWw!5e0!3m2!1sfr!2sfr!4v1660744327569!5m2!1sfr!2sfr" width="350" height="300" style={{border:0}}  allowfullscreen="" aria-hidden="false" tabIndex="0"/>
<hr />
        <h1><i className="fa-solid fa-clock"/>HORAIRES</h1>
        <span>Du lundi au vendredi:</span>
        <br />
        <span>XXh:00-XXh:00</span>
        <br />
        <span>et le samedi de XXh:00-XXh:00</span>
        <br />
        <br />
        <hr />
        <h1><i className="fa-solid fa-phone"/>TÉLÉPHONE</h1>
        <span>(+221) 33-96X-XX-XX</span>
        <br />
        <br />
        <hr />
        <h1><i className="fa-solid fa-at"/>ADRESSE EMAIL</h1>
        <span> <a href="#">xxxxxxxx@gmail.sn</a> </span>
        <br />
        </div>
        </div>
  )
}

export default Contact