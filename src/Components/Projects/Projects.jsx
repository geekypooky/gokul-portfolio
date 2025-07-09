import React, { useState } from 'react';
import './Projects.css';

function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: 'Nika-1.5B: Domain-Focused LLM',
      description: 'Fine-tuned DeepSeek R1 1.5B on the S1 dataset for high-accuracy domain-specific Q&A.',
      link: 'https://huggingface.co/BeastGokul/Nika-1.5B',
      linkText: 'View Project'
    },
    {
      title: 'S2 Dataset for LLM Training',
      description: 'Scraped 897K structured entries to fine-tune LLMs with domain alignment.',
      link: 'https://huggingface.co/datasets/BeastGokul/s2',
      linkText: 'Explore Dataset'
    },
    {
      title: 'RAG Chatbot using Gemma-2B',
      description: 'Built a domain-specific RAG chatbot using LangChain, ChromaDB, and Gemma-2B.',
      link: 'https://www.kaggle.com/code/beastgokul/rag-using-gemma-2-2b-it-langchain-and-chromadb',
      linkText: 'See Chatbot'
    },
    {
      title: 'Structured Data Generator',
      description: 'Tool to convert unstructured text into structured datasets using Gemini APIs.',
      link: 'https://www.kaggle.com/code/beastgokul/structured-data-generator-using-gemini',
      linkText: 'Check Tool'
    },
    {
      title: 'F1 Driver Prediction System',
      description: 'ML-powered predictor for Formula 1 driver performance using ensemble models.',
      link: 'https://github.com/GokulPrasathM/Formula-1-Driver-Position-Prediction',
      linkText: 'Try Predictor'
    }
  ];

  return (
    <section className="projects" id="projects">
      <h3 className="section-title">Projects & Research</h3>
      <div className="carousel-container">
        {projects.map((project, index) => (
          <div
            className={`dock-card ${hoveredIndex === index ? 'active' : ''}`}
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Link to ${project.title}`}
            >
              {project.linkText} →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
