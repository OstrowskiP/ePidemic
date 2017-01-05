import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { getIsDiseaseDefinitionSelected } from './selectors';
import { diseaseDefinitionsDeleteSelected } from './actions';

class DiseaseDefinitionButtons extends Component {
  render() {
    let {
      onDeleteButtonClicked,
      isItemSelected,
    } = this.props;

    return (
      <div>
        <Link to='/managediseases/add'>
          <RaisedButton label="Nowy" className="admin-button"/>
        </Link>
        <Link to='/managediseases/edit'>
          <RaisedButton label="Edytuj" className="admin-button" disabled={ isItemSelected }/>
        </Link>
        <RaisedButton label="Usuń" className="admin-button" onClick={ onDeleteButtonClicked } disabled={ isItemSelected }/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isItemSelected: getIsDiseaseDefinitionSelected(state)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteButtonClicked: () => {
      dispatch(diseaseDefinitionsDeleteSelected());
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DiseaseDefinitionButtons);
