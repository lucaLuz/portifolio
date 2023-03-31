import React from 'react'
import './Nav.css'
import Logo from "../../../src/assets/logo.svg"
import home from "../../../src/assets/icons/home.svg"
import sobre from "../../../src/assets/icons/sobre.svg"
import experiencia from "../../../src/assets/icons/experiencia.svg"
import serviços from "../../../src/assets/icons/serviços.svg"
import portifolio from "../../../src/assets/icons/portifolio.svg"
import contato from "../../../src/assets/icons/contato.svg"
import { useState, useEffect } from 'react'


const Nav = () => {
  //navegaçao
  const [activeNav, setActiveNav] = useState(null);
  const indi = document.querySelectorAll('.indi');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setActiveNav(0);
      } else {
        for (let i = 0; i < indi.length; i++) {
          const sectionPosition = indi[i].getBoundingClientRect();
          if (sectionPosition.top <= window.innerHeight && sectionPosition.bottom >= 0) {
            setActiveNav(i);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [indi]);

  //menuhamburgue
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>
      <aside className='aside'>
        <div onClick={handleMenuClick} className='nav__logo'>
          <img src={Logo} alt="" />
        </div>
        <nav className={`nav ${isOpen ? 'open' : ''}`}>
          <div className='nav__menu'>
            <span className='checkbox-container'>
              <span className='menu-content'>
                <ul >
                  <li onClick={() => setActiveNav('#inicio')} className={activeNav === 0 ? 'active' : ''}>
                    <a href="#inicio"  >
                      <img className='icon-home' src={home} alt="home" />
                    </a>
                  </li>
                  <li onClick={() => setActiveNav('#sobre')} className={activeNav === 1 ? 'active' : ''}>
                    <a href="#sobre">
                      <img className='icon-user-following' src={sobre} alt="sobre" />
                    </a>
                  </li>
                  <li onClick={() => setActiveNav('#experience')} className={activeNav === 2 ? 'active' : ''}>
                    <a href="#experience">
                      <img src={experiencia} alt="experiencia" />
                    </a>
                  </li>
                  <li onClick={() => setActiveNav('#services')} className={activeNav === 3 ? 'active' : ''}>
                    <a href="#services">
                      <img src={serviços} alt="serviços" />
                    </a>
                  </li>
                  <li onClick={() => setActiveNav('#portifolio')} className={activeNav === 4 ? 'active' : ''}>
                    <a href="#portifolio">
                      <img src={portifolio} alt="portifolio" />
                    </a>
                  </li>
                  <li onClick={() => setActiveNav('#contact')} className={activeNav === 5 ? 'active' : ''}>
                    <a href="#contact">
                      <img src={contato} alt="contato" />
                    </a>
                  </li>
                </ul>
              </span>
            </span>
          </div>
        </nav>
      </aside>

      <div id="overlay" className={isOpen ? 'open' : ''} onClick={handleMenuClick}></div>
    </>

  )
}

export default Nav