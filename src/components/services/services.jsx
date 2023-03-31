import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return ( 
    <section id='services' className='indi' >
      <h5>Quais serviços</h5>
      <h2>Services</h2>

      <div className='services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Front End</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Criação de sites e aplicativos</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Desenvolvimento de protótipos</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Criação de landing pages</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Otimização de conversão</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Criação de conteúdo visual para sites e aplicativos</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Desenvolvimento de formulários e pesquisas</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Design de interfaces</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Design de experiência do usuário</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Teste de usabilidade</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Design de apresentações</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Design de interfaces para jogos</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Criação de logotipos e identidade visual</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services