import React, { useRef, useEffect } from 'react';
import './Contact.css';

function Contact() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const speed = 0.5; 
    let animationFrameId;

    const animateScroll = () => {
      if (!container) return;

      scrollAmount += speed;
      if (scrollAmount >= container.scrollWidth / 2) {
        scrollAmount = 0; 
      }

      container.scrollLeft = scrollAmount;
      animationFrameId = requestAnimationFrame(animateScroll);
    };

    animationFrameId = requestAnimationFrame(animateScroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const contactItems = [
    { label: 'Name', value: 'Gokul Prasath M' },
    { label: 'Location', value: 'Avinashi, India' },
    { label: 'Email', value: 'beastgokul4@gmail.com', link: 'mailto:beastgokul4@gmail.com' },
    { label: 'Phone', value: '+91 9342218240', link: 'tel:+919342218240' }
  ];

  const duplicatedItems = [...contactItems, ...contactItems]; 
  return (
    <section className="contact" id="contact">
      <h2 className="section-title">Let's Connect</h2>
      <div className="scroll-ticker" ref={scrollRef}>
        {duplicatedItems.map((item, index) => (
          <div className="contact-tile" key={index}>
            <span className="contact-label">{item.label}:</span>
            {item.link ? (
              <a href={item.link} className="contact-value" target="_blank" rel="noopener noreferrer">
                {item.value}
              </a>
            ) : (
              <span className="contact-value">{item.value}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Contact;
