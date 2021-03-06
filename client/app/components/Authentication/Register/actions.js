import { authenticationNodeClient } from '../../../core/index';
import { redirectTo } from '../../Common/actions';
import { dialogShow } from '../../Common/Dialog/actions';

const registerErrorMessage = 'Rejestracja nie powiodła się: Nazwa użytkownika jest zajęta';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const registerRequest = () => {
  return {
    type: REGISTER_REQUEST
  }
};

export const registerSuccess = () => {
  return {
    type: REGISTER_SUCCESS
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
        dispatch(dialogShow('Skontaktuj się z administratorem w celu aktuwacji konta', 'Konto zostało utworzone'));
        redirectTo('/')
      })
      .catch(() => dispatch(registerFailure(registerErrorMessage)));
  }
};
