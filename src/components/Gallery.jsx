import React from 'react';
// import { Link } from 'react-router-dom';
import '../style/Gallery.scss';
import Card from './Card';



function Gallery(props) {
  const { cards } = props;
  return (
    <section className='gallery'>
      {cards.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </section>
  );
}

export default Gallery;