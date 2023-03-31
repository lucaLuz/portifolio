import React from 'react';
import './Contato.css';
import toast, { Toaster } from 'react-hot-toast';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contato = () => {
  const form = useRef();
 const btn = document.querySelectorAll('#envio')

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8sn90cm', 'template_sfouy5g', form.current, 'orgXmdwaNyHrvhvhS')
    .then(() => {
  
      toast.success('Enviado com sucesso')
    }, (err) => {
     toast.error("ERRO AO ENVIAR",err)
    });
    e.target.reset()
  };

  return (
    <section id='contact' className='indi'>
      <h2>Contato</h2>
      <Toaster position='top-center'/>
      <div className='contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <svg viewBox="0 0 42 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.83331 11.2918C1.83331 4.5835 5.66665 1.7085 11.4166 1.7085H30.5833C36.3333 1.7085 40.1666 4.5835 40.1666 11.2918V24.7085C40.1666 31.4168 36.3333 34.2918 30.5833 34.2918H11.4166" stroke="#E87B6C" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M30.5833 12.25L24.5841 17.0417C22.61 18.6133 19.3708 18.6133 17.3966 17.0417L11.4166 12.25M1.83331 26.625H13.3333M1.83331 18.9583H7.58331" stroke="#E87B6C" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            {/* <MdOutlineEmail className='contact__option-icon'/> */}
            <h4>Email</h4>
            <h5>luiza24021@gmail.com</h5>
            <a href="mailto:luizavictoria345@gmail.com" target={'_blank'}>Envie uma menssagem</a>
          </article>
          <article className='contact__option'>
            <svg viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.82576 43.3728C3.60556 43.3711 3.38864 43.3193 3.19149 43.2212C2.99433 43.1232 2.82213 42.9815 2.68795 42.8069C2.55378 42.6323 2.46117 42.4295 2.41715 42.2138C2.37313 41.9981 2.37887 41.7752 2.43393 41.562L4.83626 32.5844C3.23471 29.6109 2.3958 26.2561 2.3958 22.8633C2.3958 11.5602 11.5857 2.37283 22.8919 2.37283C34.198 2.37283 43.3879 11.5602 43.3879 22.8633C43.3879 34.1664 34.198 43.3538 22.8919 43.3538C19.4409 43.3538 16.0662 42.496 13.0537 40.8568L4.20708 43.3157C4.07362 43.3538 3.95922 43.3728 3.82576 43.3728ZM13.2444 37.9024C13.4923 37.9024 13.7401 37.9786 13.9689 38.093C16.6572 39.675 19.7459 40.5137 22.8919 40.5137C32.6156 40.5137 40.528 32.6034 40.528 22.8824C40.528 13.1613 32.6156 5.25103 22.8919 5.25103C13.1681 5.25103 5.25571 13.1613 5.25571 22.8824C5.25571 25.9893 6.07556 29.02 7.61991 31.6885C7.81057 32.0125 7.86777 32.4128 7.77244 32.775L5.86583 39.9038L12.8822 37.9595C12.9965 37.9214 13.13 37.9024 13.2444 37.9024Z" fill="#E87B6C" />
              <path d="M28.2517 34.04C27.0633 34.04 25.8367 33.7717 24.5525 33.2158C23.345 32.6983 22.1375 32.0083 20.9683 31.1458C19.8183 30.3025 18.6875 29.3442 17.6525 28.3092C16.6175 27.255 15.6592 26.1433 14.8158 24.9933C13.9533 23.7858 13.2633 22.5975 12.765 21.4283C12.2283 20.1633 11.96 18.9175 11.96 17.7292C11.96 16.8858 12.1133 16.0808 12.4008 15.3333C12.7075 14.5475 13.2058 13.8383 13.8575 13.225C15.0842 12.0175 16.8475 11.5767 18.2467 12.2475C18.7258 12.4583 19.1283 12.8033 19.435 13.2633L21.6583 16.3875C21.8883 16.6942 22.0608 17.02 22.195 17.3458C22.3483 17.7292 22.4442 18.1125 22.4442 18.4767C22.4442 18.975 22.31 19.4733 22.0417 19.9142C21.8692 20.2017 21.62 20.5467 21.2942 20.8725L21.045 21.1408C21.16 21.2942 21.2942 21.4858 21.505 21.7158C21.9075 22.1758 22.3483 22.6742 22.8275 23.1533C23.3067 23.6133 23.7858 24.0733 24.265 24.4758C24.495 24.6675 24.6867 24.8208 24.84 24.9167L25.1083 24.6483C25.4533 24.3033 25.7983 24.035 26.1433 23.8625C26.7758 23.46 27.7533 23.3642 28.6158 23.7283C28.9225 23.8433 29.2292 24.0158 29.555 24.2458L32.7558 26.5075C33.1967 26.8142 33.5417 27.2358 33.7717 27.715C33.9633 28.1942 34.04 28.6158 34.04 29.0567C34.04 29.6317 33.9058 30.1875 33.6567 30.7242C33.4075 31.2225 33.12 31.6633 32.775 32.0658C32.1617 32.7367 31.4525 33.235 30.6858 33.5608C29.9192 33.8867 29.095 34.04 28.2517 34.04ZM16.8475 14.835C16.7325 14.835 16.3492 14.835 15.87 15.3142C15.5058 15.6592 15.2567 16.0233 15.0842 16.4258C14.9117 16.8283 14.835 17.2883 14.835 17.7483C14.835 18.5533 15.0267 19.4158 15.41 20.3358C15.8125 21.2942 16.4067 22.31 17.135 23.3258C17.8825 24.3417 18.7258 25.3575 19.665 26.2967C20.6042 27.2167 21.6008 28.0792 22.6358 28.8458C23.6325 29.5742 24.6483 30.1492 25.6642 30.59C27.1208 31.2225 28.4625 31.3758 29.555 30.9158C29.9383 30.7625 30.2833 30.4942 30.6283 30.1492C30.8008 29.9575 30.935 29.7658 31.05 29.5167C31.1075 29.3825 31.1458 29.2292 31.1458 29.095C31.1458 29.0567 31.1458 28.9992 31.0883 28.8842L27.8875 26.6608C27.7703 26.5728 27.6413 26.5018 27.5042 26.45C27.4275 26.4883 27.3125 26.5458 27.1017 26.7567L26.3733 27.485C25.8175 28.0408 24.9358 28.1942 24.2267 27.945L23.8817 27.7917C23.4408 27.5617 22.9425 27.2167 22.3867 26.7375C21.85 26.2775 21.3325 25.7983 20.7767 25.2617C20.24 24.7058 19.7608 24.1883 19.3008 23.6517C18.9008 23.1919 18.5417 22.698 18.2275 22.1758L18.0167 21.6775C17.963 21.4841 17.9371 21.284 17.94 21.0833C17.94 20.5467 18.1317 20.0675 18.4958 19.6842L19.2242 18.9367C19.435 18.7258 19.5117 18.6108 19.55 18.5342C19.4877 18.3983 19.4105 18.2698 19.32 18.1508L17.0775 14.9883L16.8475 14.835Z" fill="#E87B6C" />
            </svg>
            {/* <BsWhatsapp className='contact__option-icon' /> */}
            <h4>WhatsApp</h4>
            <h5>+5531999049874</h5>
            <a href="https://wa.me/+5531999049874" target={'_blank'}>Envie uma menssagem</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor="name">
            Nome:
            <input type="text" name='name' placeholder='Seu nome completo' required />
          </label>
          <label htmlFor="email">
            Email:
            <input type="email" name='email' placeholder='email@email.com' required />
          </label>
          <label htmlFor="message">
            Menssagem:
            <textarea name="message" rows="7" placeholder='Menssagem...' required></textarea>
          </label>
          <button type='submit' id='envio' className='btn btn-primary'>Enviar</button>
        </form>
      </div>
    </section>
  )
}

export default Contato