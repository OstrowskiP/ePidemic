import { usersGetAll, usersSelectAndSetEdit } from './actions';
import React, { Component } from 'react';
import UsersList from './UsersList';
import { connect } from 'react-redux';

class Users extends Component {

  componentWillMount() {
    let { retrieveUsers } = this.props;

    retrieveUsers();
  }

  render() {
    let { users, selectUsers} = this.props;

    return (
      <div>
        <UsersList users={ users } onRowSelection={ selectUsers }/>
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
      dispatch(usersSelectAndSetEdit(selectedUsers));
    }

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
