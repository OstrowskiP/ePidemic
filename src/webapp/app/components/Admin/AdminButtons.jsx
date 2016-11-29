import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { usersDeleteSelected } from './Users/actions';
import { getIsUserSelected } from './Users/selectors';

class AdminButtons extends Component {
  render() {
    let { onDeleteButtonClicked, isUserSelected } = this.props;

    return (
      <div>
        <Link to='/admin/addUser'>
          <RaisedButton label="Nowy" className="admin-button"/>
        </Link>
        <RaisedButton label="Usuń" className="admin-button" onClick={ onDeleteButtonClicked } disabled={ isUserSelected }/>
        <RaisedButton label="Aktywuj" className="admin-button" disabled={ isUserSelected }/>
        <RaisedButton label="Dezaktywuj" className="admin-button" disabled={ isUserSelected }/>
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
    onDeleteButtonClicked: function () {
      dispatch(usersDeleteSelected());
    }

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminButtons);
