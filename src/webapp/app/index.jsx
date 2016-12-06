import './main.scss';
import Admin from './components/Admin/Admin';
import AdminButtons from './components/Admin/AdminButtons';
import App from './components/App';
import configureStore from './store/configureStore';
import Home from './components/Home/Home';
import Login from './components/Authentication/Login/Login';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Register from './components/Authentication/Register/Register';
import AddUser from './components/Admin/Users/AddUser';
import Disease from './components/Disease/Disease';
import DiseaseAdd from './components/Disease/DiseaseAdd/DiseaseAdd'
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';

injectTapEventPlugin();

const initialState = {};
const store = configureStore(initialState);

ReactDOM.render((
  <MuiThemeProvider muiTheme={ getMuiTheme() }>
    <Provider store={ store }>
      <Router history={ browserHistory }>
        <Route path='/' component={ App }>
          <IndexRoute component={ Home }/>
          <Route path='admin' component={ Admin }>
            <IndexRoute component={ AdminButtons }/>
            <Route path='addUser' component={ AddUser }/>
          </Route>
          <Route path='login' component={ Login }/>
          <Route path='register' component={ Register }/>
          <Route path='disease' component={ Disease }>
            <Route path='add' component={ DiseaseAdd }/>
          </Route>
          <Route path='about' component={ About }/>
          <Route path='contact' component={ Contact }/>
          <Route path='*' component={ PageNotFound }/>
        </Route>
      </Router>
    </Provider>
  </MuiThemeProvider>
), document.getElementById('app'));
