import React, { Component } from 'react';
import {
  Circle,
  LayerGroup,
  LayersControl,
  Map,
  TileLayer,
} from 'react-leaflet';
const { Overlay } = LayersControl;
import { connect } from 'react-redux';
import { diseasesGetAll } from './actions';
import { getDiseasesGroupedByName, getCenter } from './selectors';
import _ from 'lodash';
import { change } from 'redux-form';

class LeafletMap extends Component {
  componentDidMount() {
    let { updateLatLng } = this.props;

    this.refs.map.leafletElement.on('click', ({ latlng }) => {
      updateLatLng(latlng);
    })
  }

  componentWillMount() {
    let { retrieveDiseases } = this.props;

    retrieveDiseases();
  }

  render() {
    let { diseasesGroupedByName, center } = this.props;
    let diseasesNames = _.keys(diseasesGroupedByName);
    return (
      <Map ref='map' center={ center } zoom={14}>
        <TileLayer
          attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <LayersControl position='topright'>
          {
            diseasesNames.map((name) => {
              return (
                <Overlay checked={this.shouldBeVisible()} name={ name }>
                  <LayerGroup>
                    {
                      diseasesGroupedByName[name].map(({ latitude, longitude, radius, definition }) => {
                        return (
                          <Circle center={ [latitude, longitude]} fillColor={ definition.color } color={ definition.color } weight={1} radius={ radius } stroke={true}/>
                        )
                      })
                    }
                  </LayerGroup>
                </Overlay>
              )
            })
          }
        </LayersControl>
      </Map>
    )
  }

  shouldBeVisible() {
    return true;
  }
}

const mapStateToProps = (state) => {
  return {
    center: getCenter(state),
    diseasesGroupedByName: getDiseasesGroupedByName(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    retrieveDiseases: function () {
      dispatch(diseasesGetAll());
    },
    updateLatLng: function ({ lat, lng }) {
      dispatch(change('diseaseAddForm', 'latitude', lat.toString()));
      dispatch(change('diseaseAddForm', 'longitude', lng.toString()));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LeafletMap);
