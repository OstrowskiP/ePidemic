import { register } from './actions';
import _ from 'lodash';
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { reduxForm } from 'redux-form';
import { clearError } from '../actions';
import { registerFailure } from './actions';
import { getErrorMessage } from '../selectors';

class SignUp extends Component {
  componentWillUnmount() {
    let { dispatch } = this.props;

    dispatch(clearError(''))
  }

  render() {
    const {
      fields: {
        username,
        password,
        confirmedPassword
      },
      handleSubmit,
      handleSubmitImpl,
      errorMessage
    } = this.props;

    const onSubmit = handleSubmit(handleSubmitImpl);

    return (
      <form className='register-form' onSubmit={ onSubmit }>
        <div className='register-title'>Rejestracja</div>
        { !_.isEmpty(errorMessage) &&
          <div className='register-error'>{ errorMessage }</div>
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
        /><br />
        <TextField
          { ...confirmedPassword }
          errorText={ confirmedPassword.touched && confirmedPassword.error }
          hintText='Potwierdź hasło'
          type='password'
        /><br /><br />
        <RaisedButton
          label='Zarejestruj'
          primary={true}
          style={{
            width: '256px'
          }}
          type='submit'
        />
      </form>
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
      let {
        username,
        password,
        confirmedPassword
      } = values;

      if (password == confirmedPassword)
        dispatch(register({
          username,
          password
        }));
      else
        dispatch(registerFailure('Passwords do not match'));
    }
  }
};

const validate = values => {
  let errors = {};

  if (_.isEmpty(values.username)) {
    errors.username = 'Username cannot be empty';
  }

  if (_.isEmpty(values.password)) {
    errors.password = 'Password cannot be empty';
  }

  return errors;
};

export default reduxForm({
  form: 'signUpForm',
  fields: [
    'username',
    'password',
    'confirmedPassword'
  ],
  validate
}, mapStateToProps, mapDispatchToProps)(SignUp);
