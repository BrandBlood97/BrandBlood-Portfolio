import React from 'react';
import styles from './styles/AboutMe.module.css';

const AboutMe = () => (
  <section className={styles.bioSection}>
    <img src="/path-to-avatar.jpg" alt="Avatar" className={styles.avatar} />
    <p>
      {/* Bio goes here */}
    </p>
  </section>
);

export default AboutMe;
