import React from 'react';
import getPlaces from '../services/places';
import PlaceList from '../components/app/PlaceList';

export default class Places extends React.Component {
  state = {
    places: [],
  };

  async componentDidMount() {
    const places = await getPlaces();
    this.setState({ places });
  }

  render() {
    return <PlaceList places={this.state.places} />;
  }
}
