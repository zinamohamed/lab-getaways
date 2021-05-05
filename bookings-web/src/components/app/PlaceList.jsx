import React from 'react';
import PropTypes from 'prop-types';
import Place from './Place';

const PlaceList = ({ places }) => {
  return places.map((place) => <Place {...place} />);
};

PlaceList.propTypes = {
  places: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PlaceList;
