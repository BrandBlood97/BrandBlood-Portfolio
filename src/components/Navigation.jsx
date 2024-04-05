import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <NavLink to="/about-me" activeClassName="highlight">About Me</NavLink>
    <NavLink to="/portfolio" activeClassName="highlight">Portfolio</NavLink>
    <NavLink to="/contact" activeClassName="highlight">Contact</NavLink>
    <NavLink to="/resume" activeClassName="highlight">Resume</NavLink>
  </nav>
);

export default Navigation;
