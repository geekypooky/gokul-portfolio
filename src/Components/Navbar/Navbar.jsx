
import React, { useState } from 'react';
import './Navbar.css';
import { FiGithub, FiLinkedin, FiMenu, FiX } from 'react-icons/fi';
import { SiKaggle, SiLeetcode, SiHuggingface } from 'react-icons/si';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="navbar">
      <div className="navbar-left">
        <h1 className="name">Gokul Prasath</h1>
        <span className="role">AI Researcher • Software Engineer</span>
      </div>

      <nav className={`navbar-center ${menuOpen ? 'show' : ''}`}>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        
        <a href="#contact">Contact</a>
      </nav>

      <div className="navbar-right">
        <a href="https://github.com/GokulPrasathM" target="_blank" rel="noreferrer"><FiGithub /></a>
        <a href="https://www.linkedin.com/in/gokul-prasathm/" target="_blank" rel="noreferrer"><FiLinkedin /></a>
        <a href="https://www.kaggle.com/beastgokul" target="_blank" rel="noreferrer"><SiKaggle /></a>
        <a href="https://huggingface.co/BeastGokul" target="_blank" rel="noreferrer"><SiHuggingface /></a>
        <a href="https://leetcode.com/u/beastgokul4/" target="_blank" rel="noreferrer"><SiLeetcode /></a>
        <button className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
