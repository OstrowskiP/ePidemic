import { authenticationNodeClient } from '../../../core/index';
import { login } from '../Login/actions';

const registerErrorMessage = 'Failed to register: Please try again later';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const registerRequest = () => {
  return {
    type: REGISTER_REQUEST
  }
};

export const registerSuccess = (currentUser) => {
  return {
    type: REGISTER_SUCCESS,
    currentUser
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
      .then(() => {
        dispatch(registerSuccess());
        dispatch(login(credentials));
      })
      .catch((error) => dispatch(registerFailure(error)));
  }
};
