import React from 'react';
import Navbar from './pages/navbar/Navbar';
import './App.css';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/services/Services';
import Contact from './pages/contact/Contact';
import Footer from './pages/footer/Footer';
import Decouverte from './pages/decouverte/Decouverte';
import Mairie from './pages/mairie/Mairie';
import Histoire from './pages/histoire/Histoire';
import Personnalite from './pages/personnalité/Personnalite';
import Visite from './pages/visite/Visite';
import GouvernementMunicipal from './pages/gouvernementmunicipal/GouvernementMunicipal';
import AdministrationMunicipale from './pages/administrationMunicipale/AdministrationMunicipale';
import ArtCulture from './pages/artCulture/ArtCulture';
import Environnement from './pages/environnement/Environnement';
import ActionSociale from './pages/actionSociale/ActionSociale';
import Education from './pages/education/Education';
import SportLoisir from './pages/sportLoisir/SportLoisir';
import Evenement from './pages/evenement/Evenement';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/' element={<Decouverte/>} />
          <Route path='/' element={<Mairie/>} />
          <Route path='/histoire' element={<Histoire/>} />
          <Route path='/personnalite' element={<Personnalite/>}/>
          <Route path='/visite' element={<Visite/>} />
          <Route path='/gouvernement' element={<GouvernementMunicipal/>}/>
          <Route path='/administration' element={<AdministrationMunicipale/>} />
          <Route path='/artCulture' element={<ArtCulture/>} />
          <Route path='/environment' element={<Environnement/>} />
          <Route path='/socialesante' element={<ActionSociale/>}/>
          <Route path='/education' element={<Education/>}/>
          <Route path='/sportloisir' element={<SportLoisir/>}/>
          <Route path='/evenement' element={<Evenement/>} />

        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
