import RaisedButton from 'material-ui/RaisedButton';
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { reduxForm } from 'redux-form';
import Paper from 'material-ui/Paper';
import { diseaseAdd } from './actions';

const style = {
  height: 'auto',
  width: 'auto',
  display: 'inline-block',
  padding: 10,
  margin: 10
};

class DiseaseAdd extends Component {
  render() {
    const {
      fields: {
        latitude,
        longitude,
        name,
        color,
        radius
      },
      handleSubmit,
      handleSubmitImpl
    } = this.props;

    const onSubmit = handleSubmit(handleSubmitImpl);

    return (
      <Paper style={style} zDepth={1}>
        <form onSubmit={ onSubmit }>
          <TextField
            { ...latitude }
            hintText='Szerokość'
          /><br />
          <TextField
            { ...longitude }
            hintText='Wysykość'
          /><br />
          <TextField
            { ...name }
            hintText='Jednostka chorobowa'
          /><br />
          <TextField
            { ...radius }
            hintText='Promień'
          /><br />
          <TextField
            { ...color }
            hintText='Kolor'
          /><br />
          <RaisedButton
            label='wprowadź'
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
      dispatch(diseaseAdd(values));
    }
  }
};

export default reduxForm({
  form: 'diseaseAddForm',
  fields: [
    'latitude',
    'longitude',
    'name',
    'color',
    'radius'
  ]
}, mapStateToProps, mapDispatchToProps)(DiseaseAdd);
