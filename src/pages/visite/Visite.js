import React from 'react';
import './Visite.css';
import ReactPlayer from 'react-player';

function Visite() {
  return (
    <div className='visite'>
        <div className='visite-container'>
                <h1>Visite de la ville en vidéo</h1>
                <br />
                <ReactPlayer url="https://www.youtube.com/watch?v=7manCnS9-a4&ab_channel=TidianeMangassouba" />
                <br />
                <p>Vidéo réalisée en <span className='auteur'>2013</span>  par <span className='auteur'> Tidiane Mangassouba.</span></p> 
        </div>
    </div>
  )
}

export default Visite