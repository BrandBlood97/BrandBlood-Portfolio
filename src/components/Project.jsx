import React from 'react';
import styles from './styles/Project.module.css';

const Project = ({ title, imageSrc, deployedLink, githubLink }) => (
  <div className={styles.project}>
    <img src={imageSrc} alt={title} className={styles.projectImage} />
    <h3 className={styles.projectTitle}>{title}</h3>
    <div className={styles.projectLinks}>
      <a href={deployedLink} className={`btn btn-primary ${styles.link}`}>View</a>
      <a href={githubLink} className="btn btn-secondary">Repo</a>
    </div>
  </div>
);

export default Project;
