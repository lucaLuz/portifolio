import React from 'react'
import whatsapp from "../../assets/icons/whatsapp.svg"
import email from "../../assets/icons/email.svg"
import linkedin from "../../assets/icons/linkedin.svg"

const HeaderSociais = () => {
  return (
    <div className='inicio__socials'>
        <a href="https://wa.me/+5531999049874" target={'_blank'}>
          <img src={whatsapp} alt="" />
        </a>
        <a href="mailto:luizavictoria345@gmail.com"target={'_blank'}>
          <img src={email} alt="" />
        </a>
        <a href="https://www.linkedin.com/in/luiza-vitoria-dev789/"target={'_blank'}>
          <img src={linkedin} alt="" />
        </a>
    </div>
  )
}

export default HeaderSociais