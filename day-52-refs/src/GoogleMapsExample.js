import React from 'react';

class GoogleMapsExample extends React.Component {

  constructor() {
    super();
    this.state = {
      locations: [
        { lat: -34.397, lng: 150.644 },
        { lat: -34.297, lng: 150.842 }
      ]
    }
  }

  componentDidMount() {
    this.googleMap = new window.google.maps.Map(this.map, {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    });

    //Put markers in based on state
    this.state.locations.forEach((loc) => {
      var marker = new window.google.maps.Marker({
        position: { lat: loc.lat, lng: loc.lng },
        map: this.googleMap,
        title: 'Hover over the marker to see this text!'
      });

    });

    //Or hard-code the lat/long
    var marker = new window.google.maps.Marker({
      position: { lat: -34.397, lng: 150.944 },
      map: this.googleMap,
      title: 'Hover over the marker to see this text!'
    });

  }

  render() {
    return (
      <div>
        <h1>Google maps example</h1>

        <div ref={(map) => { this.map = map; }} style={{width: '50%', height: '400px'}}></div>
      </div>
    );
  }

}

export default GoogleMapsExample;
