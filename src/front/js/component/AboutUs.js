import React from 'react';
import oscarImgUrl from '../../img/foto-oscar.jpeg';
import miguelImgUrl from '../../img/foto-miguel.jpg';
import luiyiImgUrl from '../../img/foto-luiyi.jpeg';
import collageImgUrl from '../../img/foto-collage.png';
import "../../styles/AboutUs.css";


const AboutUs = () => {
  return (
    <div className="container about-us m-1">
      <div className="about-us-section">
        <h2 className='about-us-header mt-1'>¡El Proyecto! 🐾</h2>
        <div className="row">
          <div className="col-md-4">
            <p className='about-us-description'>
              <span className='about-us-pet-plus-description-highlight'>Pet+</span> es una innovadora aplicación diseñada para facilitar el manejo de la información de mascotas tanto para usuarios como para veterinarios.<br /> <br /> Con un enfoque profesional y libre de papel, <span className='about-us-pet-plus-description-highlight'>Pet+</span> permite a los usuarios llevar un control completo de las vacunas y el historial médico de sus mascotas de manera conveniente y segura. Al mismo tiempo, brinda a los veterinarios una plataforma eficiente para gestionar los registros de sus clientes sin la necesidad de archivos físicos. <br /><br />Con <span className='about-us-pet-plus-description-highlight'>Pet+</span>, se unifica el amor por las mascotas con la tecnología moderna para crear una experiencia única y sin complicaciones.
            </p>
          </div>
          <div className="col-md-8">
            <div className="row justify-content-center">
              <div className="col">
                <img src={collageImgUrl} alt="Imagen 1" className="img-fluid collage-image" />
              </div>
            </div>
          </div>
        </div>
      </div>


      <h2 className='about-us-header'>¡Nuestro Equipo! ✨</h2>
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
            Les saludo desde San José, Costa Rica. Soy un apasionado de la tecnología y el desarrollo web. Me encantan los deportes, principalmente el fútbol y el ajedrez. Soy un amante de la libertad y el tiempo en familia. La vida me ha enseñado que el conocimiento es el camino para alcanzar la libertad y que nada se compara a disfrutar de la vida sin ataduras, aunque sin abusos. <span className='about-us-text-highlight'>¡Pura Vida!</span>
          </p>
          <p className='about-us-icon'><i className="fas fa-code"></i></p>
        </div>
      </div>

      <div className="about-us-section">
        <h2 className='about-us-header'>Las Tecnologías</h2>
        <div className="technologies-section">
          <div className="row justify-content-center">
            <div className="col-md-2 technology-icon text-center">
              <i className="fab fa-react" style={{ fontSize: '1.8rem', color: '#8c52ff' }}></i>
              <p>React.js</p>
            </div>
            <div className="col-md-2 technology-icon text-center">
              <i className="fab fa-python" style={{ fontSize: '1.8rem', color: '#8c52ff' }}></i>
              <p>Python Flask</p>
            </div>
            <div className="col-md-2 technology-icon text-center">
              <i className="fas fa-database" style={{ fontSize: '1.8rem', color: '#8c52ff' }}></i>
              <p>SQL Alchemy</p>
            </div>
            <div className="col-md-2 technology-icon text-center">
              <i className="fab fa-bootstrap" style={{ fontSize: '1.8rem', color: '#8c52ff' }}></i>
              <p>Bootstrap</p>
            </div>
            <div className="col-md-2 technology-icon text-center">
              <i className="fas fa-network-wired text-center" style={{ fontSize: '1.8rem', color: '#8c52ff' }}></i>
              <p>REST API</p>
            </div>
          </div>
        </div>
      </div>

      <div className="about-us-section">
        <h2 className='about-us-header'>Próximas Actualizaciones</h2>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <ul className="about-us-list">
              <li>
                <span>Seguimiento de citas veterinarias </span>
                <i className="fas fa-calendar-alt" style={{ color: '#8c52ff' }}></i>
              </li>
              <li>
                <span>Integración de recordatorios </span>
                <i className="fas fa-clock" style={{ color: '#8c52ff' }}></i>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul className="about-us-list">
              <li>
                <span>Integración de notificaciones </span>
                <i className="fas fa-bell" style={{ color: '#8c52ff' }}></i>
              </li>
              <li>
                <span>Integración de chat </span>
                <i className="fas fa-comments" style={{ color: '#8c52ff' }}></i>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul className="about-us-list">
              <li>
                <span>Perfiles más detallados de las mascotas </span>
                <i className="fas fa-paw" style={{ color: '#8c52ff' }} style={{ color: '#8c52ff' }}></i>
              </li>
              <li>
                <span>Integración de servicios externos </span>
                <i className="fas fa-external-link-alt" style={{ color: '#8c52ff' }}></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
