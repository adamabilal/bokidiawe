import React from 'react'
import CardItem from '../../components/cardItem/CartItem';
import './Cards.css'

function ActionSociale() {
  return (
    <div className='cards'>
        <div className='cards__container'>
        <div className='cards__wrapper'>
        <h1>Action Sociale & Santé</h1>
<br />
          <ul className='cards__items'>
            <CardItem src='images/santé-1.jpg'
              text="Le Comité de santé de Bokidiawé, village situé dans le département de Matam (nord-est), et l’Association pour le développement et la mise en valeur de Bokidiawé (ADMVB), inaugurent, le samedi 1er juin, le nouveau poste de santé de la localité, indique un communiqué parvenu à l’APS.
La cérémonie se tiendra à partir de 9h, précise la même source.Le poste de santé de Bokidiawé est le fruit d’un partenariat entre différentes associations de la localité et le Programme d’appui aux initiatives de solidarité pour le développement (PAISD), qui a subventionné la réalisation de l'infrastructure à hauteur de 70% du budget global, soit environ 72, 543 millions.
L’ADMVB et le Comité de santé de Bokidiawé organisent également, à partir du 31 mai, un symposium de quatre jours sur le développement du village."
              label='Poste de santé'
              path='#'
            />
            <CardItem src='images/santé-2.jpg'
              text='La commune de Bokidiawé soulagée: Abdoul Ly, Dg de l’ARTP, offre une ambulance médicalisée aux populations
C’est un ouf de soulagement pour les populations de la zone du Diéry de la commune de Bokidiawé, dans la région de Matam. Elles ont reçu dimanche les clés d’une ambulance médicalisée toute neuve, des mains du Directeur Général de l’Artp, M. Abdoul Ly. Ce geste est le troisième du genre, à savoir une ambulance offerte aux populations de sa commune, à Bokidiawé.'
              label='Aide médicale'
              path='#'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ActionSociale