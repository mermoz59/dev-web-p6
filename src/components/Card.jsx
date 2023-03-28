import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Card.scss';

function Card({ cover, title, id }) {
    return (
      <article className='card'>
        <Link to={`/locations/${id}`}>
          <img src={cover} alt={title} />
          <h2>{title}</h2>
        </Link>
      </article>
    );
  }
  
  export default Card;