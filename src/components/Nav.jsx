import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../style/Nav.scss';
import logo from '../assets/Logo.png';

function Nav() {

  const location = useLocation();


  return (
    <nav>
      <Link to="/"><img src={logo} alt="Logo" /></Link>
      <ul>
        <li>
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            Accueil
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={location.pathname === '/about' ? 'active' : ''}
          >
            A propos
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;