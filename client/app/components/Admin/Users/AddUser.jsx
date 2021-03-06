import RaisedButton from 'material-ui/RaisedButton';
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { reduxForm, reset } from 'redux-form';
import Paper from 'material-ui/Paper';
import { userCreate } from './actions';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import LinkButton from '../../Common/Buttons/LinkButton';

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
        role,
      },
      handleSubmit,
      handleSubmitImpl
    } = this.props;

    const onSubmit = handleSubmit(handleSubmitImpl);

    return (
      <div>
        <LinkButton label="cofnij" to="/admin" />
        <Paper style={style} zDepth={1}>
          <form className='login-form' onSubmit={ onSubmit }>
            <TextField
              { ...username }
              hintText='Nazwa użytkownika'
              floatingLabelText='Nazwa użytkownika'
            /><br />
            <TextField
              { ...password }
              hintText='Hasło'
              floatingLabelText='Hasło'
              type='password'
            /><br />
            <TextField
              { ...name }
              hintText='Imię'
              floatingLabelText='Imię'
            /><br />
            <TextField
              { ...surname }
              hintText='Nazwisko'
              floatingLabelText='Nazwisko'
            /><br />
            <TextField
              { ...email }
              hintText='E-Mail'
              floatingLabelText='E-Mail'
            /><br />
            <SelectField
              floatingLabelText='Rola'
              { ...role }
              onChange={(event, index, value) => role.onChange(value)}>
              <MenuItem value='admin' primaryText='Administrator'/>
              <MenuItem value='operator' primaryText='Operator' />
            </SelectField><br />
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
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {}
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmitImpl: (values) => {
      dispatch(userCreate(values));
    },
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
    'role'
  ]
}, mapStateToProps, mapDispatchToProps)(AddUser);
