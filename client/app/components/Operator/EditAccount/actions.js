import { getCurrentUser } from '../../Authentication/selectors';
import { usersClient } from '../../../core';
import { snackbarShow } from '../../Common/SnackBar/actions';

export const userEdit = (updatedValues) => {
  return (dispatch, getState) => {
    let user = getCurrentUser(getState());
    let updatedUser = _.assign(user, updatedValues);

    usersClient.updateUsers([updatedUser])
      .then((result) => {
        if (result.success == true) {
          dispatch(snackbarShow(result.message));
        }
      })
  }
};
