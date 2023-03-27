import React from 'react';
import Nav from '../components/Nav';
import Banner from '../components/Banner';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import '../style/Home.css';

function Home() {
  return (
    <div className='body'>
      <Nav />
      <Banner />
      <Gallery />
      <Footer />
    </div>
  );
}

export default Home;
