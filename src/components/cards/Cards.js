import React from 'react';
import './Cards.css';
import { Link} from 'react-router-dom';


function Cards() {
  return (
    <div className='cards'>
      <div className='contenu'>
      <div className='box'>
        <i className="fa fa-tree"/>
        <Link to="/environment" className='navitem'>Environnement</Link>
        </div><div className='box'>
        <i className="fa fa-medkit"/>
          <Link to="/socialesante" className='navitem'>Action Sociale & Santé</Link>
        </div><div className='box'>
        <i className="fa-solid fa-user-graduate"/>
        <Link to="/education" className='navitem'>Éducation</Link>
        </div>
        <div className='box'>
        <i className="fa-solid fa-icons"/>
          <Link to="/artculture" className='navitem'>Art & Culture</Link>
        </div>
      <div className='box'>
        <i className="fa fa-person-walking"/>
        <Link to="/sportloisir" className='navitem'>Sport & Loisir</Link>
        </div>
        <div className='box'>
        <i className="fa-solid fa-calendar-days"/>
        <Link to="/evenement" className='navitem'>Évènement à venir</Link>
        </div>
        
      </div>
      
    </div>
  );
}

export default Cards;
