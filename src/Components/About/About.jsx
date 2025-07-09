import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <h3 className="section-title">Academic Background</h3>
        <div className="about-card glass-effect">
          <h4>B.Tech in Artificial Intelligence & Data Science</h4>
          <p>Dr. Mahalingam College of Engineering and Technology, Pollachi</p>
          <span className="about-year">(2022 – Present)</span>
        </div>

        <h3 className="section-title">Technical Proficiencies</h3>
        <p className="skills-intro">
          With a strong foundation in core programming and AI frameworks, I specialize in building scalable, intelligent solutions. Below is a comprehensive view of the technologies and tools I work with:
        </p>
        <div className="scroll-hint">
  <span className="scroll-icon">← SCROLL →</span>
</div>
        <div className="skill-carousel">
          {[
            "Python", "Java", "C++", "Data Structures & Algorithms", "SQL",
            "NoSQL", "TensorFlow", "PyTorch", "Hugging Face", "Transformers",
            "LangChain", "Gradio", "Machine Learning", "Deep Learning",
            "Computer Vision", "OpenCV", "FastAPI", "REST APIs", "Azure",
            "Power BI", "Tableau", "LLM Fine-tuning (PEFT, LoRA)", "RAG",
            "Prompt Engineering"
          ].map((skill, index) => (
            <div className="skill-tile" key={index}>{skill}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About; 