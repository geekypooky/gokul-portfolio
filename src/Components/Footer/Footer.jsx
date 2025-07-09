import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-minimal">
      <p className="footer-quote">
        “Models get trained. Minds get tuned. Stay both.” <br />
        <span className="quote-author">— Gokul Prasath M</span>
      </p>
      <div className="footer-meta">
        <span>© {new Date().getFullYear()} Gokul Prasath M</span>
        <span className="footer-tagline">AI Researcher • LLM Engineer • Data Dreamer</span>
      </div>
    </footer>
  );
}

export default Footer;
