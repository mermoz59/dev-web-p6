import React from 'react';
import { Link } from 'react-router-dom';
import '../style/ErrorPage.scss'

function ErrorPage() {
  return (
    <div>
    
      <div className='error__content'>
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <span><Link to="/">Retourner sur la page d'accueil.</Link></span>
      </div>
    
    </div>
  );
}

export default ErrorPage;