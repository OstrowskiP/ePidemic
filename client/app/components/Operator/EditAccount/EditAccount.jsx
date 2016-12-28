import RaisedButton from 'material-ui/RaisedButton';
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { reduxForm, reset } from 'redux-form';
import Paper from 'material-ui/Paper';
import { getCurrentUser } from '../../Authentication/selectors';
import { updateUserForm } from '../../Common/actions';
import { userEdit } from './actions';



class EditAccount extends Component {
  componentWillMount() {
    let { currentUser, fillForm } = this.props;

    fillForm(currentUser);

  }
  render() {
    const {
      fields: {
        username,
        name,
        surname,
        email,
      },
      handleSubmit,
      handleSubmitImpl,
    } = this.props;

    const onSubmit = handleSubmit(handleSubmitImpl);

    return (
      <div className='edit-account-container'>
        <Paper className='edit-account-paper' zDepth={1}>
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
            <RaisedButton
              label='Zapisz'
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

const mapStateToProps = (state) => {
  return {
    currentUser: getCurrentUser(state)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmitImpl: (values) => {
      console.log(values);
      dispatch(userEdit(values))
    },
    fillForm: (user) => {
      updateUserForm(dispatch, 'editAccountForm', user)
    }
  }
};

export default reduxForm({
  form: 'editAccountForm',
  fields: [
    'username',
    'name',
    'surname',
    'email',
  ]
}, mapStateToProps, mapDispatchToProps)(EditAccount);
