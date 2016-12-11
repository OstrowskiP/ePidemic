import React, { Component } from 'react';
import LeafletMap from './LeafletMap/LeafletMap';

class Disease extends Component {
  render() {
    return (
      <div className="disease-container">
        <div className="disease-left-col">
          { this.props.children }
        </div>
        <div className="disease-right-col">
          <LeafletMap />
        </div>
      </div>
    )
  }
}

export default Disease;
