import React from 'react'
import './Footer.css'
import { BsLinkedin } from "react-icons/bs"
import { FaGithub } from "react-icons/fa"
import { FiDribbble } from "react-icons/fi"

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>
        <svg viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="86" height="86" rx="18" stroke="#FFE8C2" stroke-width="4" />
          <path d="M29.7565 57C29.0125 57 28.4365 56.796 28.0285 56.388C27.6205 55.956 27.4165 55.368 27.4165 54.624V33.852C27.4165 33.084 27.6085 32.508 27.9925 32.124C28.4005 31.716 28.9765 31.512 29.7205 31.512C30.4645 31.512 31.0285 31.716 31.4125 32.124C31.8205 32.508 32.0245 33.084 32.0245 33.852V53.076H42.4645C43.1125 53.076 43.6045 53.244 43.9405 53.58C44.3005 53.916 44.4805 54.396 44.4805 55.02C44.4805 55.644 44.3005 56.136 43.9405 56.496C43.6045 56.832 43.1125 57 42.4645 57H29.7565ZM53.2198 57.36C51.7558 57.36 50.5438 57.096 49.5838 56.568C48.6238 56.016 47.9038 55.2 47.4238 54.12C46.9678 53.04 46.7398 51.696 46.7398 50.088V41.376C46.7398 40.608 46.9318 40.044 47.3158 39.684C47.6998 39.3 48.2518 39.108 48.9718 39.108C49.6918 39.108 50.2438 39.3 50.6278 39.684C51.0358 40.044 51.2398 40.608 51.2398 41.376V50.16C51.2398 51.408 51.4918 52.332 51.9958 52.932C52.4998 53.532 53.3038 53.832 54.4078 53.832C55.6078 53.832 56.5918 53.424 57.3598 52.608C58.1278 51.768 58.5118 50.664 58.5118 49.296V41.376C58.5118 40.608 58.7038 40.044 59.0878 39.684C59.4718 39.3 60.0238 39.108 60.7438 39.108C61.4638 39.108 62.0158 39.3 62.3998 39.684C62.8078 40.044 63.0118 40.608 63.0118 41.376V54.984C63.0118 56.52 62.2798 57.288 60.8158 57.288C60.1198 57.288 59.5798 57.096 59.1958 56.712C58.8118 56.304 58.6198 55.728 58.6198 54.984V52.248L59.1238 53.328C58.6198 54.624 57.8518 55.62 56.8198 56.316C55.8118 57.012 54.6118 57.36 53.2198 57.36Z" fill="#FFF9F4" />
        </svg>
      </a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="">Sobre</a></li>
        <li><a href="">Experiencias</a></li>
        <li><a href="">Serviços</a></li>
        <li><a href="">Portifolio</a></li>
        <li><a href="">Contato</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://www.linkedin.com/" target={'_blank'}><BsLinkedin /></a>
        <a href="https://github.com/" target={'_blank'}><FaGithub /></a>
        <a href="https://dribbble.com/" target={'_blank'}><FiDribbble /></a>
      </div>

      <div className='footer__copyrigth'>
        <small>
          &copy; Lu Devolper
        </small>
      </div>
    </footer>
  )
}

export default Footer