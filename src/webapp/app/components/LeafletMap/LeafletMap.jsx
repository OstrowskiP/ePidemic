import React, { Component } from 'react';
import {
  Circle,
  LayerGroup,
  LayersControl,
  Map,
  TileLayer,
} from 'react-leaflet';
const { Overlay } = LayersControl;

class LeafletMap extends Component {
  componentDidMount() {
    window.mapElement = this.refs.map.leafletElement;
  }

  render() {
    const center = [51.505, -0.09];

    return (
      <Map ref='map' center={center} zoom={13}>
        <TileLayer
          attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <LayersControl position='topright'>
          <Overlay checked={this.shouldBeVisible()} name='Grypa'>
            <LayerGroup>
              <Circle center={[51.51, -0.08]} fillColor='red' color='red' weight={1} radius={100} stroke={true}/>
            </LayerGroup>
          </Overlay>
          <Overlay checked={this.shouldBeVisible()} name='Cholera'>
            <LayerGroup>
              <Circle center={[51.505, -0.09]} fillColor='blue' color='blue' weight={1} radius={200} stroke={true}/>
            </LayerGroup>
          </Overlay>
        </LayersControl>
      </Map>
    )
  }

  shouldBeVisible() {
    return true;
  }
}

export default LeafletMap;
