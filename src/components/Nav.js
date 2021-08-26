import React from 'react';
import '../styles/nav.css';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Nav() {

  return (
    <nav>
      <ul className = 'nav-links'>
      <Link to = '/contact'>
        <li className = 'contact'>Contact</li>
      </Link>

      <Link to = '/projects'>
        <li className = 'projects'>Projects</li>
      </Link>

      <Link to = '/skills'>
        <li className = 'skills'>Skills</li>
      </Link>

      <Link to = '/about'>
        <li className = 'about'>About</li>
      </Link>

      <Link to = '/'>
        <li className = 'home'>Home</li>
      </Link>
      </ul>
    </nav>
  );
}

export default Nav;