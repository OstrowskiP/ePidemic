import { browserHistory } from 'react-router';
import { change, reset } from 'redux-form';

export const redirectTo = (path) => {
  browserHistory.push(path);
};

export const updateUserForm = (dispatch, userFormName, user) => {
  if (_.isEmpty(user))
    return dispatch(reset(userFormName));

  dispatch(change(userFormName, 'username', user.username));
  dispatch(change(userFormName, 'name', user.name));
  dispatch(change(userFormName, 'surname', user.surname));
  dispatch(change(userFormName, 'email', user.email));
  dispatch(change(userFormName, 'role', user.role));
};
