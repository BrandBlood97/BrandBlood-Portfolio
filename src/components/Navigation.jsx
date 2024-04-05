import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles/Navigation.module.css';

const Navigation = () => (
  <nav>
    <ul className={styles.nav}>
      <li className={styles.navItem}>
        <NavLink to="/about-me" activeclassname={styles.navLinkActive} className={styles.navLink}>About Me</NavLink>
      </li>
        <li className={styles.navItem}>
            <NavLink to="/portfolio" activeclassname={styles.navLinkActive} className={styles.navLink}>Portfolio</NavLink>
        </li>
        <li className={styles.navItem}>
            <NavLink to="/contact" activeclassname={styles.navLinkActive} className={styles.navLink}>Contact</NavLink>
        </li>
        <li className={styles.navItem}>
            <NavLink to="/resume" activeclassname={styles.navLinkActive} className={styles.navLink}>Resume</NavLink>
        </li>
    </ul>
  </nav>
);

export default Navigation;
