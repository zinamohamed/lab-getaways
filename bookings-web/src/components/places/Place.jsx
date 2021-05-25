import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

const Place = ({
  name,
  description,
  location,
  pricePerNight,
  image,
  imageThumbnail,
  maxGuests,
  petFriendly,
  pool,
  wifi,
  id
}) => {
  return (
    <div>
      <Link exact="true" activeclassname="selected" to={`/places/${id}`}>
        <h2>{name}</h2>
      </Link>
      <img src={imageThumbnail} alt="image"/>
      <p>{description}</p>
      <p>Address: {location}</p>
      <p>$$$: {pricePerNight}</p>
    </div>
  );
};

Place.propTypes = {
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
};

export default Place;
