import React, { Component } from 'react';
import {
  Circle,
  Map,
  TileLayer,
} from 'react-leaflet';
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
          {
            diseasesNames.map((name) => {
              return diseasesGroupedByName[name].map(({ latitude, longitude, radius, definition }) => {
                return (
                  <Circle center={ [latitude, longitude]} fillColor={ definition.color } color={ definition.color } weight={1} radius={ radius } stroke={true}/>
                )
              })
            })
          }
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
