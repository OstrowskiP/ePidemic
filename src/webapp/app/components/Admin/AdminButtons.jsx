import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { usersDeleteSelected } from './Users/actions';
import { getIsUserSelected } from './Users/selectors';
import { usersActivateSelected } from './Users/actions';

class AdminButtons extends Component {
  render() {
    let { onDeleteButtonClicked, onActivateButtonClicked, onDeactivateButtonClicked, isUserSelected } = this.props;

    return (
      <div>
        <Link to='/admin/addUser'>
          <RaisedButton label="Nowy" className="admin-button"/>
        </Link>
        <RaisedButton label="Usuń" className="admin-button" onClick={ onDeleteButtonClicked } disabled={ isUserSelected }/>
        <RaisedButton label="Aktywuj" className="admin-button" onClick={ onActivateButtonClicked } disabled={ isUserSelected }/>
        <RaisedButton label="Dezaktywuj" className="admin-button" onClick={ onDeactivateButtonClicked } disabled={ isUserSelected }/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isUserSelected: getIsUserSelected(state)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteButtonClicked: () => {
      dispatch(usersDeleteSelected());
    },
    onActivateButtonClicked: () => {
      dispatch(usersActivateSelected(true));
    },
    onDeactivateButtonClicked: () => {
      dispatch(usersActivateSelected(false));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminButtons);
