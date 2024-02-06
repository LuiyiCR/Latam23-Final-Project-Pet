import React from 'react';
import oscarImgUrl from '../../img/foto-cat-doc.png';
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
          <h4 className='about-us-members'>Oscar 🌮 🇲🇽</h4>
          <p className='about-us-description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla hendrerit, lorem a finibus feugiat, odio urna
            bibendum turpis, non vulputate ligula libero vel nisi. Integer venenatis ultricies diam, non cursus nisi
            ultricies nec. Sed non purus nec est hendrerit eleifend. Nulla facilisi.
          </p>
          <p className='about-us-icon'><i class="fas fa-code"></i>
          </p>
        </div>

        {/* Miguel */}
        <div className="col-md-4 about-us-columns">
          <img src={miguelImgUrl} className="img-fluid about-us rounded-circle mb-3" alt="Miguel" />
          <h4 className='about-us-members'>Miguel 🌮 🇲🇽</h4>
          <p className='about-us-description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla hendrerit, lorem a finibus feugiat, odio urna
            bibendum turpis, non vulputate ligula libero vel nisi. Integer venenatis ultricies diam, non cursus nisi
            ultricies nec. Sed non purus nec est hendrerit eleifend. Nulla facilisi.
          </p>
          <p className='about-us-icon'><i class="fas fa-code"></i></p>
        </div>

        {/* Luiyi */}
        <div className="col-md-4 about-us-columns">
          <img src={luiyiImgUrl} className="img-fluid about-us rounded-circle mb-3" alt="Luiyi" />
          <h4 className='about-us-members'>Luiyi 🦥 🇨🇷</h4>
          <p className='about-us-description'>
            Les saludo desde San José, Costa Rica. Soy un apasionado de la tecnología y el desarrollo web. Me encantan los deportes, principalmente el fútbol y el ajedrez. Soy un amante de la libertad y el tiempo en familia. La vida me ha enseñado que el conocimiento es el camino para alcanzar la libertad y que nada se compara a disfrutar de la vida sin ataduras, aunque sin abusos. <span className='about-us-text-highlight'>¡Pura vida!</span>
          </p>
          <p className='about-us-icon'><i class="fas fa-code"></i></p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
