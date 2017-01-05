import { createSelector } from 'reselect';
import _ from 'lodash';

export const getSelectedUsersIndexes = state => state.admin.users.selectedUsers;
export const getUsers = state => state.admin.users.users;

export const getSelectedUsers = createSelector(
  getUsers,
  getSelectedUsersIndexes,
  (users, selectedUsersIndexes) => {
    return selectedUsersIndexes.map((selectedUserIndex) => {
      return users[selectedUserIndex];
    });
  }
);

export const getIsUserSelected = state => {
  return _.isEmpty(state.admin.users.selectedUsers);
};

export const getIsSelectedUserActivated = createSelector(
  getSelectedUsers,
  (selectedUsers) => {
    if (_.isEmpty(selectedUsers)) {
      return false;
    }
    return _.every(selectedUsers, 'active');
  }
);
