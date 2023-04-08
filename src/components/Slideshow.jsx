import React, { useState } from 'react';
import '../style/Slideshow.scss';
import ArrowLeft from '../assets/arrow-left.png';
import ArrowRight from '../assets/arrow-right.png';

function Slideshow(props) {
  const [currentImage, setCurrentImage] = useState(0);
  const { pictures } = props;

  const handlePrevious = () => {
    setCurrentImage(currentImage === 0 ? pictures.length - 1 : currentImage - 1);
  };

  const handleNext = () => {
    setCurrentImage(currentImage === pictures.length - 1 ? 0 : currentImage + 1);
  };

  const showArrows = pictures.length > 1;

  return (
    <div className="slideshow">
      <div className="slideshow-image-container">
        <img className="slideshow-image" src={pictures[currentImage]} alt="Slideshow" />
        {showArrows && (
          <div className="slideshow-nav">
            <button onClick={handlePrevious} className="slideshow-nav-button-prev">
              <img src={ ArrowLeft } alt="Flèche gauche" />
            </button>
            <span className="slideshow-nav-count">{currentImage + 1}/{pictures.length}</span>
            <button onClick={handleNext} className="slideshow-nav-button-next">
              <img src={ ArrowRight } alt="Flèche droite" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Slideshow;