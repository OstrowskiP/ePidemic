import { authenticationNodeClient } from '../../../core/index';

const registerErrorMessage = 'Failed to register: Please try again later';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const registerRequest = () => {
  return {
    type: REGISTER_REQUEST
  }
};

export const registerSuccess = (username, role) => {
  return {
    type: REGISTER_SUCCESS,
    username,
    role
  }
};

export const registerFailure = (errorMessage) => {
  return {
    type: REGISTER_FAILURE,
    errorMessage
  }
};

export const register = (credentials) => {
  return dispatch => {
    dispatch(registerRequest());

    authenticationNodeClient.register(credentials)
      .then(({ userInfo }) => {
        let { username, role } = userInfo;
        localStorage.setItem('username', username);
        localStorage.setItem('role', role);
        dispatch(registerSuccess(username, role));
      })
      .catch((error) => dispatch(registerFailure(error)));
  }
};
