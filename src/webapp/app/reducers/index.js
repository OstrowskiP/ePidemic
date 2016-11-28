import authentication from '../components/Authentication/reducer';
import snackbar from '../components/Common/SnackBar/reducer';
import users from '../components/Admin/Users/reducer';

import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

const admin = combineReducers({
  users
});

const reducers = {
  authentication,
  form: reduxFormReducer,
  snackbar,
  admin
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
