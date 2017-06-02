import React from 'react';

class GoogleMapsChange extends React.Component {

  constructor() {
    super();

    this.markers = [];
  }

  componentDidMount() {
    this.googleMap = new window.google.maps.Map(this.map, {
      center: { lat: 32.7767, lng: -96.7970 },
      zoom: 8
    });
  }

  handleClick(lat, lng) {
    var marker = new window.google.maps.Marker({
      position: { lat: lat, lng: lng },
      map: this.googleMap,
      title: 'Hover over the marker to see this text!'
    });
    this.markers.push(marker);
  }

  handleClearMarkers() {
    for (let i = 0; i < this.markers.length; i++) {
      this.markers[i].setMap(null);
    }
    this.markers = [];
  }

  handleCenterpointClick(lat, lng) {
    this.googleMap.setCenter({ lat: lat, lng: lng });
  }

  render() {
    return (
      <div className="google-maps-change">
        <h1>Google maps example #2</h1>

        <p>In this example the map is updatable. Since the Google map is not a react component, I took the route of doing this outside of state.</p>

        <div ref={(map) => { this.map = map; }} style={{width: '50%', height: '400px', float: 'left'}}></div>

        <div style={{width: '40%', float: 'left'}}>
          <button onClick={() => this.handleClearMarkers()}>clear markers</button>
          <h2>Cities</h2>
          <ul>
            <li onClick={() => this.handleClick(32.7767, -96.7970)}>Dallas</li>
            <li onClick={() => this.handleClick(32.7555, -97.3308)}>Fort Worth</li>
            <li onClick={() => this.handleClick(29.7604, -95.3698)}>Houston</li>
            <li onClick={() => this.handleClick(30.0802, -94.1266)}>Beaumont</li>
            <li onClick={() => this.handleClick(30.3333, -95.3580)}>Cut and Shoot</li>
          </ul>

          <h2>Centerpoints</h2>
          <ul>
            <li onClick={() => this.handleCenterpointClick(29.7604, -95.3698)}>Houston Area</li>
            <li onClick={() => this.handleCenterpointClick(32.7555, -97.3308)}>DFW Area</li>
          </ul>

        </div>
      </div>
    );
  }


}

export default GoogleMapsChange;
