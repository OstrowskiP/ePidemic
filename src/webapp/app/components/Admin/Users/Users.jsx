import { usersGetAll, usersSelect, usersDeleteSelected } from './actions';
import RaisedButton from 'material-ui/RaisedButton';
import React, { Component } from 'react';
import UsersList from './UsersList';
import { connect } from 'react-redux';

class Users extends Component {

  componentWillMount() {
    let { retrieveUsers } = this.props;

    retrieveUsers();
  }

  render() {
    let { users, onDeleteButtonClicked, selectUsers} = this.props;

    return (
      <div>
        <UsersList users={ users } onRowSelection={ selectUsers }/>
        <RaisedButton label="usuń" onClick={ onDeleteButtonClicked }/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  let { users } = state.admin.users;

  return { users };
};

const mapDispatchToProps = (dispatch) => {
  return {
    retrieveUsers: () => {
      dispatch(usersGetAll());
    },

    selectUsers: function (selectedUsers) {
      dispatch(usersSelect(selectedUsers));
    },

    onDeleteButtonClicked: function () {
      dispatch(usersDeleteSelected());
    }

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
