import './main.scss';
import Admin from './components/Admin/Admin';
import App from './components/App';
import configureStore from './store/configureStore';
import Home from './components/Home/Home';
import Login from './components/Authentication/Login/Login';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Register from './components/Authentication/Register/Register';
import Users from './components/Admin/Users/Users';
import AddUser from './components/Admin/Users/AddUser';
import LeafletMap from './components/LeafletMap/LeafletMap';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

injectTapEventPlugin();

const initialState = {};
const store = configureStore(initialState);

ReactDOM.render((
  <MuiThemeProvider muiTheme={ getMuiTheme() }>
    <Provider store={ store }>
      <Router history={ browserHistory }>
        <Route component={ App }>
          <Route path='/' component={ Home }/>
          <Route path='/admin' component={ Admin }/>
          <Route path='/users' component={ Users }/>
          <Route path='/addUser' component={ AddUser }/>
          <Route path='/login' component={ Login }/>
          <Route path='/register' component={ Register }/>
          <Route path='/map' component={ LeafletMap }/>
          <Route path='/about' component={ About }/>
          <Route path='/contact' component={ Contact }/>
          <Route path='*' component={ PageNotFound }/>
        </Route>
      </Router>
    </Provider>
  </MuiThemeProvider>
), document.getElementById('app'));
