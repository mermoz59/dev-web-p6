import React from 'react';
// import { Link } from 'react-router-dom';
import '../style/Gallery.scss';
import Card from './Card';
import cardsData from '../data/data.json';

const cards = cardsData.map((card) => ({
    id: card.id,
    title: card.title,
    cover: card.cover,
  }));

function Gallery() {
    return (
      <section className='gallery'>
        {cards.map((card) => (
        <Card key={card.id} {...card} />
      ))}
      </section>
    );
  }
  
  export default Gallery;