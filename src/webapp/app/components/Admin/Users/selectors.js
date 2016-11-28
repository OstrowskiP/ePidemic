import { createSelector } from 'reselect';

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
