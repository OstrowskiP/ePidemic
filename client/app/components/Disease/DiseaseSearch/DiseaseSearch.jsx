import RaisedButton from 'material-ui/RaisedButton';
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import Paper from 'material-ui/Paper';
import { diseaseAdd } from '../DiseaseAdd/actions';
import AutoComplete from 'material-ui/AutoComplete'
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem'
import { displaySearchResults } from './actions';
import { getDiseasesNames } from '../LeafletMap/selectors';

const style = {
  height: 'auto',
  width: 'auto',
  display: 'inline-block',
  padding: 10,
  margin: 10
};

class DiseaseSearch extends Component {
  render() {
    const {
      fields: {
        area,
        name,
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
            { ...area }
            hintText='Obszar'
            floatingLabelText='Obszar'
          /> <br/>
          {/*<TextField*/}
            {/*{ ...name }*/}
            {/*hintText='Jednostka chrobowa'*/}
            {/*floatingLabelText='Jednostka chrobowa'*/}
          {/*/> <br/>*/}
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
    diseasesNames: getDiseasesNames(state)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmitImpl: (values) => {
      dispatch(displaySearchResults(values));
    }
  }
};

export default reduxForm({
  form: 'diseaseSearchForm',
  fields: [
    'area',
    'name',
  ]
}, mapStateToProps, mapDispatchToProps)(DiseaseSearch);
