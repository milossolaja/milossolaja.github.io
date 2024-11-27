import React from 'react';
import './Project.css';

const Project = ({ title, position, institution, timeline, description, technologies, projectLink }) => {
  return (
    <a href={projectLink} target="_blank" rel="noopener noreferrer" className="project-box">
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
