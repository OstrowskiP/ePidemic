import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { createStore, applyMiddleware, compose } from 'redux';

const configureStore = (initialState) => {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  return store;
};

export default configureStore;
