import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import {FiAlignRight,FiXCircle,FiChevronDown } from "react-icons/fi";
import logo from '../../images/img1.jpg'
import '../../App.css'

function Navbar() {  
  const [isMenu, setisMenu] = useState(false);
  const [isResponsiveclose, setResponsiveclose] = useState(false);
  const toggleClass = () => {
    setisMenu(isMenu === false ? true : false);
    setResponsiveclose(isResponsiveclose === false ? true : false);
};
  let boxClass = ["main-menu menu-right menuq1"];
  if(isMenu) {
      boxClass.push('menuq2');
  }else{
      boxClass.push('');
  }
  const [isMenuSubMenu, setMenuSubMenu] = useState(false);
  const toggleSubmenu = () => {
    setMenuSubMenu(isMenuSubMenu === false ? true : false);
  };
  let boxClassSubMenu = ["sub__menus"];
  if(isMenuSubMenu) {
      boxClassSubMenu.push('sub__menus__Active');
  }else {
      boxClassSubMenu.push('');
  }

  

  return (
    <header className="header__middle">
    <div className="container">
        <div className="row">

            {/* Add Logo  */}
            <div className="header__middle__logo">
                <Link exact activeClassName='is-active' to="/">
                    <img src={logo} alt="logo" /> 
                </Link>
            </div>

            <div className="header__middle__menus">
                <nav className="main-nav " >

                {/* Responsive Menu Button */}
                {isResponsiveclose === true ? <> 
                    <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiXCircle />   </span>
                </> : <> 
                    <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight />   </span>
                </>}


                <ul className={boxClass.join(' ')}>
                <li  className="menu-item" >
                    <Link exact activeClassName='is-active' onClick={toggleClass} to={`/`}> Accueil </Link> 
                </li>
                <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to={`/`}> Découvrir Bokidiawé <FiChevronDown /> </Link>
                    <ul className={boxClassSubMenu.join(' ')} > 
                        <li> <Link onClick={toggleClass} activeClassName='is-active'  to={`/histoire`}> Histoire </Link> </li>
                        <li><Link onClick={toggleClass} activeClassName='is-active' to={`/visite`}> Visite en vidéo </Link> </li>
                    </ul>
                </li>
                <li className="menu-item " ><Link onClick={toggleClass} activeClassName='is-active' to={`/gouvernement`}> La Mairie </Link> </li>
                <li className="menu-item " ><Link onClick={toggleClass} activeClassName='is-active' to={`/Contact`}> Contact </Link> </li>

                </ul>


                </nav>     
            </div>   



    
    
        </div>
  </div>
</header>

  );
  
}

export default Navbar;
