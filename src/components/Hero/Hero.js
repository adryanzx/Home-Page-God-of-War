import React from 'react';
import './Hero.css'; 
import bulletsIcon from '../assets/bullets.svg';
import thumbnailGif from '../assets/thumbnail.gif';
import playIcon from '../assets/play.svg';
import faixaEtaria from '../assets/faixa-etaria.png';

function HeroSection() {
  return (
    <section className="s-hero">
      <div className="container">
        <div className="left" data-aos="fade-right">
          <h3 className="subtitle">
            <img src={bulletsIcon} alt="Bullets" />
            <span>Lançamento dia 09/06/2024</span>
          </h3>
          <h1>God of War<br /> Ragnarök</h1>
          <p>Os maiores heróis dos nove reinos, lutando por um futuro em que acreditam.</p>
          <div className="value">
            <strong>R$ 349,00</strong>
            <a href="#" target="_blank">Comprar na pré-venda</a>
          </div>
        </div>
        <div className="right" data-aos="fade-up">
          <span>Assista o trailer</span>
          <button>
            <img src={thumbnailGif} className="thumbnail" alt="thumbnail do trailer" />
            <img src={playIcon} className="play" alt="Icon play" />
          </button>
          <div className="year-old">
            <img src={faixaEtaria} alt="Faixa etária" />
            <p><strong>Drogas Lícitas, Linguagem Imprópria, Violência Extrema</strong></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
