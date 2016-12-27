import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { usersDeleteSelected } from './Users/actions';
import { getIsUserSelected, getIsSelectedUserActivated } from './Users/selectors';
import { usersActivateSelected } from './Users/actions';
import { redirectTo } from '../Common/actions';

class AdminButtons extends Component {
  render() {
    let {
      onDeleteButtonClicked,
      onEditButtonClicked,
      onActivateButtonClicked,
      onDeactivateButtonClicked,
      isUserSelected,
      isSelectedUserActive
    } = this.props;

    return (
      <div>
        <Link to='/admin/addUser'>
          <RaisedButton label="Nowy" className="admin-button"/>
        </Link>
        <RaisedButton label="Usuń" className="admin-button" onClick={ onDeleteButtonClicked } disabled={ isUserSelected }/>
        <RaisedButton label="Edytuj" className="admin-button" onClick={ onEditButtonClicked } disabled={ isUserSelected }/>
        <RaisedButton label="Aktywuj" className="admin-button" onClick={ onActivateButtonClicked } disabled={ isUserSelected || isSelectedUserActive }/>
        <RaisedButton label="Dezaktywuj" className="admin-button" onClick={ onDeactivateButtonClicked } disabled={ isUserSelected || !isSelectedUserActive }/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isUserSelected: getIsUserSelected(state),
    isSelectedUserActive: getIsSelectedUserActivated(state)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteButtonClicked: () => {
      dispatch(usersDeleteSelected());
    },
    onEditButtonClicked: () => {
      redirectTo('/admin/editUser');
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
