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
import { getDiseasesGroupedByName } from './selectors';
import _ from 'lodash';
import { getCenter } from './selectors';

class LeafletMap extends Component {
  componentDidMount() {
    window.mapElement = this.refs.map.leafletElement;
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
                      diseasesGroupedByName[name].map(({ latitude, longitude, color, radius}) => {
                        return (
                          <Circle center={ [latitude, longitude]} fillColor={ color } color={ color } weight={1} radius={ radius } stroke={true}/>
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
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LeafletMap);
