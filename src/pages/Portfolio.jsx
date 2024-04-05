import React from 'react';
import Project from '../components/Project';
import styles from './styles/Portfolio.module.css';

const projects = [
  //I need to put my project information here
];

const Portfolio = () => (
  <section className={styles.portfolioSection}>
    <div className={styles.projectsGrid}>
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          imageSrc={project.imageSrc}
          deployedLink={project.deployedLink}
          githubLink={project.githubLink}
        />
      ))}
    </div>
  </section>
);

export default Portfolio;
