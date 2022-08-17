import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import footer  from '../../images/img1.jpg';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Partenaires:</h2>
            <Link to='/'>- Association des Usagers du Forage de Bokidiawé</Link>
            <Link to='/'>- Association pour le Développement et la Mise en Valeur de Bokidiawé (France, Sénégal et Congo)</Link>
            <Link to='/'>- Conseil Rural de Bokidiawé</Link>
            <Link to='/'>- Service Régional de l’Hydraulique de Matam</Link>
            <Link to='/'>- Bureau d’étude privé pour le contrôle des travaux</Link>
            <Link to='/'>- MAE - Projet "Initiatives de Codéveloppement"</Link>
            <Link to='/'>- Etat sénégalais</Link>
            <Link to='/'>- La ville d'Elbeuf</Link>
            <Link to='/'>- PAISD Dakar</Link>
            <Link to='/'>- MEAE Paris</Link>
            <Link to='/'>- DRH Saint Louis</Link>




          </div>
          <div className='footer-link-items'>
            <h2>Partenaires techniques:</h2>
            <Link to='/'>-  Service Régional de l’Hydraulique
Hydraulique Sans Frontières</Link>
          
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Financeurs:</h2>
            <Link to='/'>- MAE - Projet "Initiatives de Codéveloppement"</Link>
            <Link to='/'>- ADMVB - Association pour le Développement et la Mise en Valeur de Bokidiawé</Link>
            <Link to='/'>- Etat sénégalais</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Bénéficiaires:</h2>
            <Link to='/'>- 8.000 bénéficiaires </Link>
            
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
            <img src={footer} alt="" />
            </Link>
          </div>
          <small className='website-rights'>Adama TRAORÉ © 2022</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
            className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
            className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
            className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
          </div>
        </div>
        <div className='info'>
        <p>
        <i class="fa fa-exclamation-triangle"/>
          Ce site est en cours de construction.Certaines informations seront susceptible de changer,
          vous pouvez contribuer à son amélioration en envoyant vos suggestions à l'adresse email suivante  <a href="mailto:adama.bilaltraore@gmail.com"> adama.bilaltraore@gmail.com</a>
        </p>


        </div>
      </section>
    </div>
  );
}

export default Footer;
