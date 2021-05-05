import React from 'react';
import PropTypes from 'prop-types';

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
}) => {
  return (
    <ul>
      <li>{name}</li>
      <li>{description}</li>
      <li>{location}</li>
      <li>{pricePerNight}</li>
      <li>{image}</li>
      <li>{imageThumbnail}</li>
      <li>{maxGuests}</li>
      <li>{petFriendly ? 'Pet Friendly' : 'No Pets Allowed'}</li>
      {pool ? <li>Has a Pool!</li> : null}
      {wifi ? <li>Free Wifi</li> : null}
    </ul>
  );
};

Place.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  location: PropTypes.string,
  pricePerNight: PropTypes.number,
  image: PropTypes.string,
  imageThumbnail: PropTypes.string,
  maxGuests: PropTypes.number,
  petFriendly: PropTypes.bool,
  pool: PropTypes.bool,
  wifi: PropTypes.bool,
};

export default Place;
