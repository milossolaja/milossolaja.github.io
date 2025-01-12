import React from 'react';
import './project.css';

const Project = ({ title, position, institution, timeline, description, technologies, pdfLink }) => {
  return (
    <a href={pdfLink} target="_blank" rel="noopener noreferrer" className="project-box">
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-position">{position}</p> 
        <p className="project-institution">{institution} | {timeline}</p>
        <p className="project-description">{description}</p>
        <div className="project-technologies">
          {technologies.map((tech, index) => (
            <span key={index} className="project-tech-bubble">{tech}</span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default Project;
