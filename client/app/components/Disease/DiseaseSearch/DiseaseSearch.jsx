import RaisedButton from 'material-ui/RaisedButton';
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem'
import { displaySearchResults } from './actions';
import { getDiseaseDefinitions } from '../../DiseaseDefinition/selectors';
import { diseaseDefinitionsGetAll } from '../../DiseaseDefinition/actions';

const style = {
  height: 'auto',
  width: 'auto',
  display: 'inline-block',
  padding: 10,
  margin: 10
};

class DiseaseSearch extends Component {
  componentWillMount() {
    let { retrieveDiseaseDefinitions } = this.props;

    retrieveDiseaseDefinitions();
  }

  render() {
    const {
      fields: {
        area,
        diseaseDefinition,
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
            { ...area }
            hintText='Obszar'
            floatingLabelText='Obszar'
          /> <br/>
          <SelectField
            floatingLabelText='Jednostka chorobowa'
            { ...diseaseDefinition }
            onChange={(event, index, value) => diseaseDefinition.onChange(value)}>
            <MenuItem value='all'  primaryText='Wszystkie'/>
            {
              diseaseDefinitions.map((diseaseDefinition) => {
                return (<MenuItem value={ diseaseDefinition } primaryText={ diseaseDefinition.name }/>)
              })
            }
          </SelectField><br />
          <RaisedButton
            label='szukaj'
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
      dispatch(displaySearchResults(values));
    },
    retrieveDiseaseDefinitions: () => {
      dispatch(diseaseDefinitionsGetAll());
    }
  }
};

export default reduxForm({
  form: 'diseaseSearchForm',
  fields: [
    'area',
    'diseaseDefinition',
  ]
}, mapStateToProps, mapDispatchToProps)(DiseaseSearch);
