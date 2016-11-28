import {
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE
} from './Login/actions';
import {
  LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE, CLEAR_ERROR
} from './actions';
import {
  REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE
} from './Register/actions';

const initialState = {
  isFetching: false,
  isAuthenticated: localStorage.getItem('username') && localStorage.getItem('role') ? true : false,
  username: localStorage.getItem('username') ? localStorage.getItem('username')  : null,
  role: localStorage.getItem('role') ? localStorage.getItem('role') : null,
  errorMessage: ''
};

const authentication = (state = initialState, action) => {
  switch (action.type) {

    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
        errorMessage: '',
        username: null,
        role: null
      });

    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        errorMessage: '',
        username: action.username,
        role: action.role
      });

    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.errorMessage,
        username: null,
        role: null
      });

    case LOGOUT_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: true,
        username: null,
        role: null
      });

    case LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        username: null,
        role: null
      });

    case LOGOUT_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        username: null,
        role: null
      });

    case REGISTER_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
        errorMessage: '',
        username: null,
        role: null
      });

    case REGISTER_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        errorMessage: '',
        username: action.username,
        role: action.role
      });

    case REGISTER_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.errorMessage,
        username: null,
        role: null
      });

    case CLEAR_ERROR:
      return Object.assign({}, state, {
        errorMessage: ''
      });

    default:
      return state
  }
};

export default authentication;
