import React from 'react';
import oscarImgUrl from '../../img/foto-oscar.jpeg';
import miguelImgUrl from '../../img/foto-miguel.jpg';
import luiyiImgUrl from '../../img/foto-luiyi.jpeg';
import "../../styles/AboutUs.css";


const AboutUs = () => {
  return (
    <div className="container about-us m-1">
      <h2 className='about-us-header'>¡Nuesto Equipo! ✨</h2>
      <div className="row justify-content-center">
        {/* Oscar */}
        <div className="col-md-4 about-us-columns">
          <img src={oscarImgUrl} className="img-fluid about-us rounded-circle mb-3" alt="Oscar" />
          <h4 className='about-us-members'>Oscar 🌌 🇲🇽</h4>
          <p className='about-us-description'>
          ¡Hola! Soy un estudiante de ingeniería informática de UPIICSA, apasionado por explorar y dominar 
          nuevas tecnologías. Me especializo en redes y sistemas digitales, pero mi entusiasmo se centra 
          actualmente en el desarrollo web, donde encuentro la lógica de programación emocionante. Siempre 
          estoy aprendiendo y adaptándome a las demandas tecnológicas cambiantes. Mi objetivo es seguir 
          explorando nuevas oportunidades mientras avanzo en este emocionante viaje hacia el futuro digital.
          </p>
          <p className='about-us-icon'><i className="fas fa-code"></i>
          </p>
        </div>

        {/* Miguel */}
        <div className="col-md-4 about-us-columns">
          <img src={miguelImgUrl} className="img-fluid about-us rounded-circle mb-3" alt="Miguel" />
          <h4 className='about-us-members'>Miguel 🌮 🇲🇽</h4>
          <p className='about-us-description'>
            ¡Saludos desde Los Cabos, México! Me emociona sumergirme en el mundo del desarrollo de nuevas aplicaciones. En mi tiempo libre, disfruto haciendo ejercicio y practicando deportes para mantenerme activo. También me encanta jugar videojuegos para relajarme y divertirme.
            Para mí, la disciplina, el compromiso y la perseverancia son valores fundamentales que guían mi vida. He aprendido a lo largo de los años que con esfuerzo y dedicación, cualquier meta es alcanzable.
          </p>
          <p className='about-us-icon'><i className="fas fa-code"></i></p>
        </div>

        {/* Luiyi */}
        <div className="col-md-4 about-us-columns">
          <img src={luiyiImgUrl} className="img-fluid about-us rounded-circle mb-3" alt="Luiyi" />
          <h4 className='about-us-members'>Luiyi 🦥 🇨🇷</h4>
          <p className='about-us-description'>
            Les saludo desde San José, Costa Rica. Soy un apasionado de la tecnología y el desarrollo web. Me encantan los deportes, principalmente el fútbol y el ajedrez. Soy un amante de la libertad y el tiempo en familia. La vida me ha enseñado que el conocimiento es el camino para alcanzar la libertad y que nada se compara a disfrutar de la vida sin ataduras, aunque sin abusos. <span className='about-us-text-highlight'>¡Pura vida!</span>
          </p>
          <p className='about-us-icon'><i className="fas fa-code"></i></p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
