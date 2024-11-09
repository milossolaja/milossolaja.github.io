import React from 'react';
import './Experience.css';

const Experience = ({ date, title, company, description, technologies, githubLink }) => {
  return (
    <a href={githubLink} target="_blank" rel="noopener noreferrer" className="experience-box">
      <div className="experience-container">
        <p className="experience-date">{date}</p>
        <div className="experience-content">
          <p className="experience-title">{title}</p>
          <p className="experience-company">{company}</p>
          <p className="experience-description">{description}</p>
          <div className="experience-technologies">
            {technologies.map((tech, index) => (
              <span key={index} className="tech-bubble">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

export default Experience;
