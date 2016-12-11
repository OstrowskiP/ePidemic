import RaisedButton from 'material-ui/RaisedButton';
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { reduxForm, reset } from 'redux-form';
import Paper from 'material-ui/Paper';
import { diseaseDefinitionCreate } from './actions';

const style = {
  height: 'auto',
  width: 'auto',
  display: 'inline-block',
  padding: 10,
  margin: 10
};

class AddDiseaseDefinition extends Component {
  render() {
    const {
      fields: {
        name,
        color,
      },
      handleSubmit,
      handleSubmitImpl
    } = this.props;

    const onSubmit = handleSubmit(handleSubmitImpl);

    return (
      <Paper style={style} zDepth={1}>
        <form className='login-form' onSubmit={ onSubmit }>
          <TextField
            { ...name }
            hintText='Jednostka chorobowa'
          /><br />
          <TextField
            { ...color }
            hintText='Kolor'
          /><br />
          <RaisedButton
            label='Stwórz'
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
      dispatch(diseaseDefinitionCreate(values));
    },
  }
};

export default reduxForm({
  form: 'addDiseaseDefinitionForm',
  fields: [
    'name',
    'color',
  ]
}, mapStateToProps, mapDispatchToProps)(AddDiseaseDefinition);
