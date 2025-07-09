import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import './Hero.css';
import image from '../../assets/image.png';
import resumePDF from '../../assets/Gokul_Prasath_M.pdf'; 

function Hero() {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 25,
        speed: 400,
        glare: true,
        'max-glare': 0.3,
        scale: 1.05,
      });
    }

    return () => {
      if (tiltRef.current && tiltRef.current.vanillaTilt) {
        tiltRef.current.vanillaTilt.destroy();
      }
    };
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hi, I'm Gokul Prasath</h1>
        <h2>Aspiring AI Researcher & Software Engineer</h2>
        <p>
          Aspiring AI researcher and software engineer skilled in advanced reasoning tasks, 
          fine-tuning large language models, and building data-driven applications. Passionate 
          about creating high-impact solutions using ML and generative AI.
        </p>
        <div className="hero-buttons">
          <a href={resumePDF} download>
            Download Resume
          </a>
        </div>
      </div>

      <div className="hero-image" ref={tiltRef}>
        <img src={image} alt="Gokul Prasath" />
      </div>
    </section>
  );
}

export default Hero;
