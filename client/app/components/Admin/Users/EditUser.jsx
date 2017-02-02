import RaisedButton from 'material-ui/RaisedButton';
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { reduxForm, reset } from 'redux-form';
import Paper from 'material-ui/Paper';
import { userEdit } from './actions';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { getIsUserSelected } from './selectors';
import LinkButton from '../../Common/Buttons/LinkButton';

const style = {
  height: 'auto',
  width: 'auto',
  display: 'inline-block',
  padding: 10,
  margin: 10
};

class EditUser extends Component {
  render() {
    const {
      fields: {
        username,
        name,
        surname,
        email,
        role,
      },
      handleSubmit,
      handleSubmitImpl,
      isUserSelected,
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
              label='Edytuj użytkownika'
              primary={ true }
              style={{
                width: '256px'
              }}
              type='submit'
              disabled={ isUserSelected }
            />
          </form>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isUserSelected: getIsUserSelected(state),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmitImpl: (values) => {
      dispatch(userEdit(values))
    },
  }
};

export default reduxForm({
  form: 'adminEditUserForm',
  fields: [
    'username',
    'name',
    'surname',
    'email',
    'role'
  ]
}, mapStateToProps, mapDispatchToProps)(EditUser);
