import React from 'react'
import './Sobre.css'
import eu from '../../assets/icons/eusobre.svg'
import { FaAward } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'

const Sobre = () => {
  return (
    <section id='sobre' className='indi'>
      <h2>Sobre mim</h2>

      <div className='sobre__container'>
        <div className='sobre__mim'>
          <div className='sobre__mim-image'>
            <img src={eu} alt="sobre imagem" />
          </div>
        </div>
        <div className='sobre__content'>
          <div className='sobre__cards'>
            <a href="https://github.com/lucaLuz">
            <article className='sobre__card'>
              <FaAward className='sobre__icon' />
              <h5>Experiencias</h5>
              <small>2+ anos de trabalho</small>
            </article>
            </a>
            <a href="https://github.com/lucaLuz">
            <article className='sobre__card'>
              <VscFolderLibrary className='sobre__icon' />
              <h5>Projetos</h5>
              <small>20+ completos</small>
            </article>
            </a>
          </div>
          <p>
          Olá Meu nome é Luiza, Sou uma desenvolvedora front-end com 2 anos e meio de experiência na área.
           Tenho formação em tecnólogo de front-end pelo SENAI e completei vários cursos de UX/UI design, 
           front-end e back-end no Alura. Tenho experiência em trabalhar com diversas tecnologias, incluindo React, 
           Angular, testes TDD, TypeScript, JavaScript, Java, jQuery, Vue.js, C#, bancos de dados SQL e MySQL e C++.
            Atualmente estou cursando faculdade de desenvolvimento mobile e sou estagiária na empresa WAKKE como desenvolvedora
            . Sou apaixonada por tecnologia e 
          sempre busco me atualizar e aprender novas habilidades para oferecer soluções inovadoras e eficientes para meus clientes.
          </p>
          <a href="#contact" className='btn-primary'>Vamos conversar</a>
        </div>
      </div>
    </section>
  )
}

export default Sobre