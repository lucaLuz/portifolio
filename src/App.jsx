import React from 'react'
import Inicio from './components/Inicio/Inicio'
import Sobre from './components/Sobre/Sobre'
import Experiencias from './components/Experiencias/Experiencias'
import Contato from './components/Contato/Contato'
import Footer from './components/Footer/Footer'
import Nav from './components/Nav/Nav'
import Projetos from './components/Projetos/Projetos'
import Services from './components/services/services'

const App = () => {
  return (
    <>
    <Inicio/>
    <Nav/>
    <Sobre/>
    <Experiencias/>
    <Services/>
    <Projetos/>
    <Contato/>
    <Footer/>
    </>
  )
}

export default App