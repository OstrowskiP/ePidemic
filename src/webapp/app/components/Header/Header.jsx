import { logout } from '../Authentication/actions';

import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import {
  getIsAuthenticated,
  getIsAdmin,
  getIsOperator
} from '../Authentication/selectors';

class Home extends Component {
  componentDidUpdate() {
    let { isAuthenticated } = this.props;

    if (isAuthenticated)
      browserHistory.push('/');
  }

  render() {
    const {
      isAuthenticated,
      isAdmin,
      isOperator,
      logout
    } = this.props;

    return (
      <div className='header' >
        <Link to='/'>
          <FlatButton
            label='epidemic'
            primary={ true }
            style={{
              margin: '5px'
            }}
          />
        </Link>
        <Link to='/map'>
          <FlatButton
            label='wyszukaj'
            primary={ true }
            style={{
              margin: '5px'
            }}
          />
        </Link>
        { isOperator &&
        <Link to = '/'>
          <FlatButton
            label='edycja konta'
            primary={ true }
            style={{
              margin: '5px'
            }}
          />
        </Link>
        }
        { isOperator &&
        <Link to = '/'>
          <FlatButton
            label='edycja słownika'
            primary={ true }
            style={{
              margin: '5px'
            }}
          />
        </Link>
        }
        { isOperator &&
        <Link to = '/'>
          <FlatButton
            label='nowe zgłoszenie'
            primary={ true }
            style={{
              margin: '5px'
            }}
          />
        </Link>
        }
        { isAdmin &&
        <Link to = '/admin'>
          <FlatButton
            label='lista użytkowników'
            primary={ true }
            style={{
              margin: '5px'
            }}
          />
        </Link>
        }
        { !isAuthenticated &&
          <Link to='/register'>
            <RaisedButton
              className='header-register-button'
              label='rejestracja'
              primary={ false }
            />
          </Link>
        }
        { !isAuthenticated &&

          <Link to='/login'>
            <RaisedButton
              className='header-login-button'
              label='logowanie'
              primary={ true }
            />
          </Link>
        }
        { isAuthenticated &&
          <Link to='/'>
            <RaisedButton
              className='header-register-button'
              label='wyloguj'
              primary={ false }
              onClick={ logout }
            />
          </Link>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: getIsAuthenticated(state),
    isAdmin: getIsAdmin(state),
    isOperator: getIsOperator(state)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: function () {
      dispatch(logout());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
