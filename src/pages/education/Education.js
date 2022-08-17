import React from 'react'
import './Cards.css'
import CardItem from '../../components/cardItem/CartItem'

function Education() {
  return (
    <div className='cards'>
    <div className='cards__container'>
    <div className='cards__wrapper'>
    <h1>Éducation</h1>
    <br />
      <ul className='cards__items'>
        <CardItem src='images/edu-1.jpg'
          text="EFA BOKIDIAWÉ : Remerciements M.Kalilou wagué maire de la commune de Bokidiawé,a offert 3 salles de classe à mon établissement.Ainsi,les abris provisoires sont devenus de mauvais souvenirs dans cette école.Encore une fois merci au nom de toute l'équipe pédagogique."
          label='Construction des salles de classe'
          path='#'
        />
        <CardItem src='images/edu-2.jpg'
          text='Coût pour la construction :157 Millions fcfa. / ADMVB:70 Millions fcfa. /
          ETAT du Sénégal :25 Millions fcfa. /
        LA COOPÉRATION Française : le reste.'
          label='Lycée de Bokidiawé'
          path='#'
        />
        <CardItem  src='images/edu-3.jpg'
          text="le collectif des Anciens élèves pansent les plaies de l’Etablissement en venant en aide à leur ancienne école . En effet , ce dernier a réfectionné une cinquantaine de tables et a construit quatre toilettes pour l’école .
          Selon le porte-parole du collectif , Abdoulaye war , l’idée est venue d’un groupe de 126 élèves qui a décidé de prendre en charge les urgences de l’école mère . Après avoir discuté avec le directeur et le personnel enseignant , le collectif a pris la décision d’apporter son soutien .

Nous essayerons de rendre la monnaie à cette école qui nous inculqués une bonne éducation et encourager nos petits frères et soeurs qui y sont a-t-il conclu ."
          label='École 2 de Bokidiawé'
          path='#'
        />
        <CardItem  src='images/edu-4.jpg'
          text="Pose 1ère Pierre de l'Espace Numérique Ouvert de Bokidiawé
          Après Ndioum, le Chef de l'Etat a posé la première pierre numérique ouvert de Bokidiawé.
          Cette commune du département de Matam va bénéficier d'un ENO de deuxième génération.
          Le nouveau design a été présenté au Président de la République avec des nouveautés sur la surface bâtie et le format du bâtiment qui se présente beaucoup plus en longueur en R+1.
          Désormais il y'aura 4 salles de 50 places.
          L'établissement devrait être livré dans un délai maximal de 36 mois.
          "
          label='ENO DE Bokidiawé'
          path='#'
        />
      </ul>
    </div>
  </div>
</div>
  )
}

export default Education