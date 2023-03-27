import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Nav.scss';
import logo from '../assets/Logo.png';

function Nav() {
  return (
    <nav>
      <img src={logo} alt="Logo" />
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/">A propos</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;