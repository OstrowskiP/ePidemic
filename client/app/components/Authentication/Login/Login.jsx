import _ from 'lodash'
import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { reduxForm } from 'redux-form'
import { login } from './actions';
import { clearError } from '../actions';
import { getErrorMessage } from '../selectors';

class Login extends Component {
  componentWillUnmount() {
    let { dispatch } = this.props;

    dispatch(clearError(''))
  }

  render() {
    const {
      fields: {
        username,
        password
      },
      handleSubmit,
      handleSubmitImpl,
      errorMessage
    } = this.props;

    const onSubmit = handleSubmit(handleSubmitImpl);

    return (
      <div className='login-container'>
        <form className='login-form' onSubmit={ onSubmit }>
          <div className='login-title'>Logowanie</div>
          { !_.isEmpty(errorMessage) &&
            <div className='login-error'>{ errorMessage }</div>
          }
          <TextField
            { ...username }
            errorText={ username.touched && username.error }
            hintText='Nazwa użytkownika'
          /><br />
          <TextField
            { ...password }
            errorText={ password.touched && password.error }
            hintText='Hasło'
            type='password'
          /><br /><br />
          <RaisedButton
            label='Zaloguj'
            primary={ true }
            style={{
              width: '256px'
            }}
            type='submit'
          />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    errorMessage: getErrorMessage(state)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmitImpl: (values) => {
      let { username, password } = values;

      dispatch(login({
        username,
        password
      }))
    }
  }
};

const validate = values => {
  let errors = {};

  if (_.isEmpty(values.username)) {
      errors.username = 'Nazwa użytkownika nie może być pusta'
  }

  if (_.isEmpty(values.password)) {
    errors.password = "Hasło nie może być puste"
  }

  return errors
};

export default reduxForm({
  form: 'loginForm',
  fields: [
    'username',
    'password'
  ],
  validate
}, mapStateToProps, mapDispatchToProps)(Login)
