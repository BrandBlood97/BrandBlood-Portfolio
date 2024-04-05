import React from 'react';

const Project = ({ title, imageSrc, deployedLink, githubLink }) => (
  <div>
    <img src={imageSrc} alt={title} />
    <h3>{title}</h3>
    <a href={deployedLink}>Deployed Application</a>
    <a href={githubLink}>GitHub Repository</a>
  </div>
);

export default Project;
