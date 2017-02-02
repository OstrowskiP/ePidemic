import { diseaseDefinitionsGetAll, diseaseDefinitionsSelectAndEdit } from './actions';
import React, { Component } from 'react';
import DiseaseDefinitionListDummy from './DiseaseDefinitionListDummy';
import { connect } from 'react-redux';
import { getDiseaseDefinitions } from './selectors';
import { diseaseDefinitionsSelectClear } from './actions';

class DiseaseDefinitionList extends Component {
  componentWillUnmount() {
    let { clearSelection } = this.props;

    clearSelection();
  }

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
    selectItem: (item) => {
      dispatch(diseaseDefinitionsSelectAndEdit(item));
    },
    clearSelection: () => {
      dispatch(diseaseDefinitionsSelectClear());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DiseaseDefinitionList);
