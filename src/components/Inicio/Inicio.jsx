import React from 'react'
import CTA from './CTA'
import './Inicio.css'
import eu from '../../assets//icons/eu.svg'
import HeaderSociais from './HeaderSociais'

const Inicio = () => {
  return (
    <header>
      <div id='inicio' className='indi'>
        <div className='eu'>
            <img className='eu-image'  src={eu} alt="eu-imagem" />
        </div>
        <div className='conteudo'>
            <article className='conteudo__text'>
              <h1>OIá, meu nome é Luiza </h1>
              <h3>sou Desenvolvedora Front End e Design  UX/UI</h3>
              <HeaderSociais/>
            </article>
        </div>
      </div>
          <CTA/>
    </header>
  )
}

export default Inicio