import React from 'react';
import Nav from '../components/Nav';
import Banner from '../components/Banner';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import '../style/Home.css';
import Bannerimg from '../assets/banner.png'

function Home() {
  return (
    <div className='body'>
      <Nav />
      <Banner backgroundImage={Bannerimg} title="Chez vous, partout et ailleurs" />
      <Gallery />
      <Footer />
    </div>
  );
}

export default Home;
