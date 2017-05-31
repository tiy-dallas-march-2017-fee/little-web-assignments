import React from 'react';

class GoogleMapsExample extends React.Component {

  componentDidMount() {
    this.googleMap = new window.google.maps.Map(this.map, {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    });

    var marker = new window.google.maps.Marker({
      position: { lat: -34.397, lng: 150.644 },
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