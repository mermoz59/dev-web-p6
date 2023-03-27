import React from 'react';
// import { Link } from 'react-router-dom';
import '../style/Footer.scss';
import Logo from '../assets/logo-footer.png'

function Footer() {
    return (
      <footer>
        <img src={Logo} alt="Logo Kasa" />
        <span>© 2020 Kasa. All rights reserved</span>
      </footer>
    );
  }
  
  export default Footer;