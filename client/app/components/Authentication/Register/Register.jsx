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
      <div className='register-container'>
        <form className='register-form' onSubmit={ onSubmit }>
          <div className='register-title'>Rejestracja</div>
          { !_.isEmpty(errorMessage) &&
            <div className='register-error'>{ errorMessage }</div>
          }
          <TextField
            { ...username }
            errorText={ username.touched && username.error }
            hintText='Nazwa użytkownika'
            floatingLabelText='Nazwa użytkownika'
          /><br />
          <TextField
            { ...password }
            errorText={ password.touched && password.error }
            hintText='Hasło'
            floatingLabelText='Hasło'
            type='password'
          /><br />
          <TextField
            { ...confirmedPassword }
            errorText={ confirmedPassword.touched && confirmedPassword.error }
            hintText='Potwierdź hasło'
            floatingLabelText='Potwierdź hasło'
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
        dispatch(registerFailure('Podane hasła są różne'));
    }
  }
};

const validate = values => {
  let errors = {};

  if (_.isEmpty(values.username)) {
    errors.username = 'Nazwa użytkownika nie może być pusta';
  }

  if (_.isEmpty(values.password)) {
    errors.password = 'Hasło nie może być puste';
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
