import React from 'react';
import PropTypes from 'prop-types';
import Place from './Place';


const PlaceList = ({ places, loading }) => {
  return (
    <div>
      { loading 
        ? 
        <h2>Loading...</h2>
        :
        <ul aria-label="getaways">
          {
            places.map((place) => (
            <li key={place.id}>
             <Place  
             {...place} /> 
             </li>
             ))
          }
        </ul>
      }
    </div>

  )
};

PlaceList.propTypes = {
  places: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      pricePerNight: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      imageThumbnail: PropTypes.string.isRequired,
      maxGuests: PropTypes.number.isRequired,
      petFriendly: PropTypes.bool.isRequired,
      pool: PropTypes.bool.isRequired,
      wifi: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default PlaceList;
