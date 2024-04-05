import React from 'react';
import styles from './styles/Resume.module.css';

const Resume = () => (
  <section className={styles.resumeSection}>
    <a href="/path-to-resume.pdf" className="btn btn-outline-primary mb-3">Download Resume</a>
    <h2>Proficiencies</h2>
    <ul className={styles.listProficiencies}>
      <li>JavaScript (ES6+)</li>
      <li>React</li>
      <li>Node.js</li>
      {/* Add more */}
    </ul>
  </section>
);

export default Resume;
