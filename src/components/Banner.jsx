import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import '../style/Banner.scss';

function Banner({ backgroundImage, title }) {
  const bannerStyle = {
    backgroundImage: `url(${backgroundImage})`,
  }
  
  return (
    <section className='banner' style={bannerStyle}>
      <h1>{title}</h1>
    </section>
  );
}

Banner.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  title: PropTypes.string,
};
  
export default Banner;