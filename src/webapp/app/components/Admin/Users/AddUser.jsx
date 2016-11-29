import { snackbarShow } from '../../Common/SnackBar/actions';
import { usersClient } from '../../../core';
import RaisedButton from 'material-ui/RaisedButton';
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { reduxForm, reset } from 'redux-form';
import Paper from 'material-ui/Paper';

const style = {
  height: 'auto',
  width: 'auto',
  display: 'inline-block',
  padding: 10,
  margin: 10
};

class AddUser extends Component {
  render() {
    const {
      fields: {
        username,
        password,
        name,
        surname,
        email,
      },
      handleSubmit,
      handleSubmitImpl
    } = this.props;

    const onSubmit = handleSubmit(handleSubmitImpl);

    return (
      <Paper style={style} zDepth={1}>
        <form className='login-form' onSubmit={ onSubmit }>
          <TextField
            { ...username }
            hintText='Nazwa użytkownika'
          /><br />
          <TextField
            { ...password }
            hintText='Hasło'
          /><br />
          <TextField
            { ...name }
            hintText='Imię'
          /><br />
          <TextField
            { ...surname }
            hintText='Nazwisko'
          /><br />
          <TextField
            { ...email }
            hintText='E-Mail'
          /><br />
          <RaisedButton
            label='Stwórz użytkownika'
            primary={ true }
            style={{
              width: '256px'
            }}
            type='submit'
          />
        </form>
      </Paper>
    );
  }
}

const mapStateToProps = () => {
  return {}
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmitImpl: (values) => {
      usersClient.createUser(values)
        .then(result => {
          dispatch(snackbarShow(result.message));
          dispatch(reset('adminCreateUserForm'));
        }).catch(error => {
        console.error(error)
      })
    }
  }
};

export default reduxForm({
  form: 'adminCreateUserForm',
  fields: [
    'username',
    'password',
    'name',
    'surname',
    'email',
  ]
}, mapStateToProps, mapDispatchToProps)(AddUser);
