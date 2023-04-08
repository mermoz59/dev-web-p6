import React from 'react';
import Banner from '../components/Banner';
import Gallery from '../components/Gallery';
import '../style/Home.css';
import Bannerimg from '../assets/banner.png'
import cardsData from '../data/data.json';

const cards = cardsData.map((card) => ({
  id: card.id,
  title: card.title,
  cover: card.cover,
}));

function Home() {
  return (
    <div>
    
      <Banner backgroundImage={Bannerimg} title="Chez vous, partout et ailleurs" />
      <Gallery cards={cards} />
    
    </div>
  );
}

export default Home;
