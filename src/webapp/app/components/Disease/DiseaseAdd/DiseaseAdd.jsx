import RaisedButton from 'material-ui/RaisedButton';
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField'
import { reduxForm } from 'redux-form';
import Paper from 'material-ui/Paper';
import { diseaseAdd } from './actions';
import MenuItem from 'material-ui/MenuItem'
import { getDiseasesNames } from '../LeafletMap/selectors';

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
      handleSubmitImpl,
      diseasesNames
    } = this.props;

    const onSubmit = handleSubmit(handleSubmitImpl);

    return (
      <Paper style={style} zDepth={1}>
        <form onSubmit={ onSubmit }>
          <TextField
            { ...latitude }
            hintText='Szerokość'
            floatingLabelText='Szerokość'
          /><br />
          <TextField
            { ...longitude }
            hintText='Wysokość'
            floatingLabelText='Wysokość'
          /><br />
          {/*<TextField*/}
            {/*{ ...name }*/}
            {/*hintText='Jednostka chorobowa'*/}
            {/*floatingLabelText='Jednostka chorobowa'*/}
          {/*/><br />*/}
          <SelectField
            floatingLabelText='Jednostka chorobowa'
            { ...name }
            onChange={(event, index, value) => name.onChange(value)}>
            {
              diseasesNames.map((diseaseName) => {
                return (<MenuItem value={ diseaseName } primaryText={ diseaseName }/>)
              })
            }
          </SelectField><br />
          <TextField
            { ...radius }
            hintText='Promień'
            floatingLabelText='Promień'
          /><br />
          <TextField
            { ...color }
            hintText='Kolor'
            floatingLabelText='Kolor'
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

const mapStateToProps = (state) => {
  return {
    diseasesNames: getDiseasesNames(state)
  }
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
