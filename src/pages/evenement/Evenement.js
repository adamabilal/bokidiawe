import React from 'react';
import './Evenement.css'

function Evenement() {
  return (
    <div className='cards'>
         <div className='cards-container'>
        <h1>Évènement à venir</h1>
        <p className='info'>
        <i class="fa fa-exclamation-triangle"/>
        Cette rubrique  est en attente de vos contributions pour être remplie.
        </p>
        </div>
    </div>
  )
}

export default Evenement