import React, { Component } from 'react';
import DiseaseDefinitionList from './DiseaseDefinitionList'

class DiseaseDefinition extends Component {
  render() {
    return (
      <div className="disease-definition-container">
        <div className="disease-definition-left-col">
          { this.props.children }
        </div>
        <div className="disease-definition-right-col">
          <DiseaseDefinitionList />
        </div>
      </div>
    )
  }
}

export default DiseaseDefinition;
