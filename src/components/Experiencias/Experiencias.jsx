import React from 'react'
import './Experiencias.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experiencias = () => {
  return (
    <section id='experience' className='indi' >
      <h2>Minhas Experiencias</h2>

      <div className='experience__container'>
        <div className='experience frontend'>
          <h3>FrontEnd</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>HTML</h4>
              <small className='text-ligh'>Experiente</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>CSS</h4>
              <small className='text-ligh'>Experiente</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>JavaScript</h4>
              <small className='text-ligh'>Intermediário</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>Bootstraps</h4>
              <small className='text-ligh'>Intermediário</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>JQuary</h4>
              <small className='text-ligh'>Intermediário</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>React</h4>
              <small className='text-ligh'>Intermediário</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>Vue.js</h4>
              <small className='text-ligh'>Intermediário</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>Angular</h4>
              <small className='text-ligh'>Intermediário</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>SASS</h4>
              <small className='text-ligh'>Experiente</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>TypeScript</h4>
              <small className='text-ligh'>Intermediário</small>
              </div>
            </article>
          </div>
        </div>

        <div className='experience backend'>
          <h3>UX/UI</h3>
          <div className='experience__content'>
          <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>Figma</h4>
              <small className='text-ligh'>Experiente</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>Adobe Ai/XD</h4>
              <small className='text-ligh'>Intermediário</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>Design Gráfico</h4>
              <small className='text-ligh'>Básico</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>UX Design</h4>
              <small className='text-ligh'>Intermediário</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>UI Design</h4>
              <small className='text-ligh'>Intermediario</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>Canvas</h4>
              <small className='text-ligh'>Intermediario</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>Design Thinking</h4>
              <small className='text-ligh'>Intermediário</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>Design System</h4>
              <small className='text-ligh'>Experiente</small>
              </div>
            </article>
          </div>
        </div>

        <div className='experience backend'>
          <h3>BackEnd</h3>
          <div className='experience__content'>
          <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>Node js</h4>
              <small className='text-ligh'>Básico</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>C++</h4>
              <small className='text-ligh'>Básico</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>C#</h4>
              <small className='text-ligh'>Básico</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>MySQL</h4>
              <small className='text-ligh'>Básico</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>SQL</h4>
              <small className='text-ligh'>Básico</small>
              </div>
            </article>
          </div>
        </div>

      </div>
    </section>
  ) 
}

export default Experiencias