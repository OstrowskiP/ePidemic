import { diseaseDefinitionsGetAll, diseaseDefinitionsSelect } from './actions';
import React, { Component } from 'react';
import DiseaseDefinitionListDummy from './DiseaseDefinitionListDummy';
import { connect } from 'react-redux';
import { getDiseaseDefinitions } from './selectors';

class DiseaseDefinitionList extends Component {

  componentWillMount() {
    let { retrieveDiseaseDefinitions } = this.props;

    retrieveDiseaseDefinitions();
  }

  render() {
    let { diseaseDefinitions, selectItem } = this.props;

    return (
      <div>
        <DiseaseDefinitionListDummy diseaseDefinitions={ diseaseDefinitions } onRowSelection={ selectItem }/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    diseaseDefinitions: getDiseaseDefinitions(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    retrieveDiseaseDefinitions: () => {
      dispatch(diseaseDefinitionsGetAll());
    },

    selectItem: function (item) {
      dispatch(diseaseDefinitionsSelect(item));
    }

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DiseaseDefinitionList);
