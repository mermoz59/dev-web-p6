import React from 'react';
// import { Link } from 'react-router-dom';
import '../style/Card.scss';

function Card({ cover, title }) {
    return (
      <article className='card'>
        <img src={cover} alt={title} />
        <h2>{title}</h2>
      </article>
    );
  }
  
  export default Card;