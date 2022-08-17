import React from 'react';
import '../../App.css';
import ImageSlider from 'ac-react-simple-image-slider';



import './HeroSection.css';
const imageData = [
  {src:'/images/boki-2.jpg',
  title:'Image 2'},
  {src:'/images/boki-3.jpg',
  title:'Image 3'},
  {src:'/images/boki-4.jpg',
  title:'Image 4'}
  ,
  {src:'/images/boki-1.jpg',
  title:'Image 1'},
  {src:'/images/boki-5.jpg',
  title:'Image 5'}
  
 
 ];


const  HeroSection = () => {
 
  return (
    <div className='hero-container'>
      <div className='Img'>
      <ImageSlider  width='100%'
        height='90%'
        data={imageData} 
      />
      </div>
      <h1>Bienvenue à la Ville de Bokidiawé</h1>
      <br />
      <span className='accros'>Bokidiawé,ville résiliente et attractive, qui valorise le capital humain.</span>
    </div>
  );
}

export default HeroSection;
