import React from 'react';
import '../styles/nav.css';
import { Link } from 'react-router-dom';
import profile from '../assets/profile.jpg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Nav() {

  return (
    <nav>
      <ul className = 'nav-links'>
      <Link to = '/'>
      <li>
        <img className = 'profile' src = {profile} alt = 'profile'></img>
      </li>
      </Link>
      <Link to = '/contact'>
        <li className = 'contact'>Contact</li>
      </Link>
      <Link to = '/about/resume'>
        <li className = 'resume'>Resume</li>
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
      </ul>
    </nav>
  );
}

export default Nav;