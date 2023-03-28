import React from 'react';
import Nav from '../components/Nav';
import Slideshow from '../components/Slideshow';
import Volet from '../components/Volet';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';
import '../style/LocationDetails.css';
import data from '../data/data.json';

function LocationDetails() {

    const { id } = useParams();
    const location = data.find(location => location.id === id);
    const getRatingStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
          const starClass = (i < rating) ? "star filled" : "star empty";
          stars.push(<i key={i} className={starClass}></i>);
        }
        return stars;
    };

    return (
      <div className='body'>
        <Nav />

        <Slideshow pictures={location.pictures} />
      <div className="location-details-container">
        <div className="location-details-left">
          <h2>{location.title}</h2>
          <p>{location.location}</p>
          <ul>
            {location.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
          <Volet title="Description" width='98%' widthdesc='100%'>
            <p>{location.description}</p>
          </Volet>
        </div>
        <div className="location-details-right">
          <div className="details__host">
              <img src={location.host.picture} alt="" />
              <p>{location.host.name}</p>
          </div>
          <p className='rating-star'>{getRatingStars(location.rating)}</p>
          <Volet title="Equipements" width='98%' widthdesc='100%'>
            <ul>
                {location.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
                ))}
            </ul>
          </Volet>
        </div>
      </div>
    
        <Footer />
      </div>
    );
  }
  
  export default LocationDetails;