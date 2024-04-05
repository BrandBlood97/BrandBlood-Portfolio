import Project from '../components/Project';
import styles from './styles/Portfolio.module.css';
import React, { useEffect, useState } from 'react';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch('https://api.github.com/users/BrandBlood97/repos');
      const repos = await response.json();

      
      const projectData = repos.map(repo => ({
        title: repo.name,
        deployedLink: repo.homepage,
        githubLink: repo.html_url,
        projectDescription: repo.description,
      }));

      setProjects(projectData);
    };

    fetchProjects();
  }, []);

  return (
    <section className={styles.portfolioSection}>
      <h2 className="card-header text-center mx-auto ">Projects Portfolio</h2>
      <div className="projectsGrid">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            projectDescription={project.projectDescription}
            deployedLink={project.deployedLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
