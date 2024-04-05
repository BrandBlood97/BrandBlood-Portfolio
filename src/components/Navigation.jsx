import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles/Navigation.module.css';

const Navigation = () => (
  <nav>
    <ul className={styles.nav}>
      <li className={styles.navItem}>
        <NavLink to="/about-me" activeClassName={styles.navLinkActive} className={styles.navLink}>About Me</NavLink>
      </li>
        <li className={styles.navItem}>
            <NavLink to="/portfolio" activeClassName={styles.navLinkActive} className={styles.navLink}>Portfolio</NavLink>
        </li>
        <li className={styles.navItem}>
            <NavLink to="/contact" activeClassName={styles.navLinkActive} className={styles.navLink}>Contact</NavLink>
        </li>
        <li className={styles.navItem}>
            <NavLink to="/resume" activeClassName={styles.navLinkActive} className={styles.navLink}>Resume</NavLink>
        </li>
    </ul>
  </nav>
);

export default Navigation;
