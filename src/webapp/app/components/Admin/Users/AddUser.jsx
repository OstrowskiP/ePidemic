import { snackbarShow } from '../../Common/SnackBar/actions';
import { usersClient } from '../../../core';

import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { reduxForm, reset } from 'redux-form';

class AddUser extends Component {
  render() {
    const {
      fields: {
        username,
        password,
        name,
        surname,
        email,
        isEnabled
      },
      handleSubmit,
      handleSubmitImpl
    } = this.props;

    const onSubmit = handleSubmit(handleSubmitImpl);

    return (
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
        <Checkbox
          checked={isEnabled.value ? true : false}
          onCheck={(e) => isEnabled.onChange(e)}
          label="Aktywny"
        /><br /><br />
        <RaisedButton
          label='Stwórz użytkownika'
          primary={ true }
          style={{
            width: '256px'
          }}
          type='submit'
        />
      </form>
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
    'isEnabled',
  ]
}, mapStateToProps, mapDispatchToProps)(AddUser);
