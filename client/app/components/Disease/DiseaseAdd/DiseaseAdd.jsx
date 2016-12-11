import RaisedButton from 'material-ui/RaisedButton';
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField'
import { reduxForm } from 'redux-form';
import Paper from 'material-ui/Paper';
import { diseaseAdd } from './actions';
import MenuItem from 'material-ui/MenuItem'
import { getDiseaseDefinitions } from '../../DiseaseDefinition/selectors';
import { diseaseDefinitionsGetAll } from '../../DiseaseDefinition/actions';

const style = {
  height: 'auto',
  width: 'auto',
  display: 'inline-block',
  padding: 10,
  margin: 10
};

class DiseaseAdd extends Component {
  componentWillMount() {
    let { retrieveDiseaseDefinitions } = this.props;

    retrieveDiseaseDefinitions();
  }

  render() {
    const {
      fields: {
        latitude,
        longitude,
        diseaseDefinition,
        radius
      },
      handleSubmit,
      handleSubmitImpl,
      diseaseDefinitions
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
          <SelectField
            floatingLabelText='Jednostka chorobowa'
            { ...diseaseDefinition }
            onChange={(event, index, value) => diseaseDefinition.onChange(value)}>
            {
              diseaseDefinitions.map((diseaseDefinition) => {
                return (<MenuItem value={ diseaseDefinition } primaryText={ diseaseDefinition.name }/>)
              })
            }
          </SelectField><br />
          <TextField
            { ...radius }
            hintText='Promień'
            floatingLabelText='Promień'
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
    diseaseDefinitions: getDiseaseDefinitions(state)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmitImpl: (values) => {
      dispatch(diseaseAdd(values));
    },
    retrieveDiseaseDefinitions: () => {
      dispatch(diseaseDefinitionsGetAll());
    }
  }
};

export default reduxForm({
  form: 'diseaseAddForm',
  fields: [
    'latitude',
    'longitude',
    'diseaseDefinition',
    'radius'
  ]
}, mapStateToProps, mapDispatchToProps)(DiseaseAdd);
