import {
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE
} from './Login/actions';
import {
  LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE, CLEAR_ERROR
} from './actions';
import {
  REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE
} from './Register/actions';
import { AUTHENTICATION_SUCCESS, AUTHENTICATION_FAILURE } from './actions';

const initialState = {
  isCompleted: false,
  isFetching: false,
  isAuthenticated: false,
  currentUser: null,
  errorMessage: ''
};

const authentication = (state = initialState, action) => {
  switch (action.type) {

    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
        errorMessage: ''
      });

    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: ''
      });

    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.errorMessage,
      });

    case LOGOUT_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: true,
      });

    case LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        currentUser: null
      });

    case LOGOUT_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true
      });

    case REGISTER_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
        errorMessage: ''
      });

    case REGISTER_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: '',
      });

    case REGISTER_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.errorMessage,
      });

    case CLEAR_ERROR:
      return Object.assign({}, state, {
        errorMessage: ''
      });

    case AUTHENTICATION_FAILURE:
      return Object.assign({}, state, {
        isCompleted: true,
        isFetching: false,
        isAuthenticated: false,
        currentUser: null
      });

    case AUTHENTICATION_SUCCESS:
      return Object.assign({}, state, {
        isCompleted: true,
        isFetching: false,
        isAuthenticated: true,
        currentUser: action.currentUser
      });

    default:
      return state
  }
};

export default authentication;
