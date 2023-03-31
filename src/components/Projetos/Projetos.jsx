import React from 'react'
import './Projetos.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Jogo do Amigo Secreto - React',
    github: 'https://github.com/lucaLuz/amigo-secreto',
    demo: 'https://amigo-secreto-dusky.vercel.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Temporizador de tarefas - Vue',
    github: 'https://github.com/lucaLuz/alura-tracker',
    demo: 'https://alura-tracker-delta.vercel.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Restaurante - TypeScript',
    github: 'https://github.com/lucaLuz/aluroni',
    demo: 'https://aluroni-eta.vercel.app/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Pokedex - Angular',
    github: 'https://github.com/lucaLuz/pokedex-angular',
    demo: 'https://pokedex-angular-drab.vercel.app/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Moonsic - React Native',
    github: 'https://github.com/lucaLuz/Moonsic-Beta',
    demo: 'https://www.figma.com/file/XdaJ8zCgLw3S9L1FU1xQ0W/app-de-musica?node-id=7-194&t=iPL4NOHMcL4UAiXZ-0'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Perfis - Svelte',
    github: 'https://github.com/lucaLuz/Svelt-perfiis',
    demo: 'https://svelt-perfiis.vercel.app/'
  }
]

const Projetos = () => {
  return (
    <section id='portifolio' className='indi' >
      <h5>Meus trabalhos rescentes</h5>
      <h2>Portifolio</h2>

      <div className='portifolio__container'>
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portifolio__item'>
                <div className='portifolio__item-image'>
                  <img src={image} alt="" />
                </div>
                <h3>{title}</h3>
                <div className='portifolio__item-cta' >
                  <a href={github} className='btn_card1' target={'_blank'}>Github</a>
                  <a href={demo} className='btn-card2' target={'_blank'}>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Projetos