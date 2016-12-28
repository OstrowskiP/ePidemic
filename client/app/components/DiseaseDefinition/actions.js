import { getSelectedDiseaseDefinitions } from './selectors.js';
import { diseaseDefinitionsNodeClient } from '../../core';
import { snackbarShow } from '../Common/SnackBar/actions';
import _ from 'lodash'
import { updateDiseaseDefinitionForm } from '../Common/actions';

export const DISEASE_DEFINITIONS_SET = 'DISEASE_DEFINITIONS_SET';
export const DISEASE_DEFINITION_SELECT = 'DISEASE_DEFINITION_SELECT';
export const DISEASE_DEFINITION_SELECT_CLEAR = 'DISEASE_DEFINITION_SELECT_CLEAR';

export const diseaseDefinitionsSet = (diseaseDefinitions) => {
  return {
    type: DISEASE_DEFINITIONS_SET,
    diseaseDefinitions
  }
};

export const diseaseDefinitionsSelect = (diseaseDefinitions) => {
  return {
    type: DISEASE_DEFINITION_SELECT,
    diseaseDefinitions
  }
};

export const diseaseDefinitionsSelectAndEdit = (diseaseDefinitions) => {
  return (dispatch, getState) => {
    dispatch(diseaseDefinitionsSelect(diseaseDefinitions));

    let diseaseDefinition = _.first(getSelectedDiseaseDefinitions(getState()));

    updateDiseaseDefinitionForm(dispatch, 'editDiseaseDefinitionForm', diseaseDefinition);
  }
};

export const diseaseDefinitionsSelectClear = () => {
  return {
    type: DISEASE_DEFINITION_SELECT_CLEAR,
  }
};

export const diseaseDefinitionsGetAll = () => {
  return (dispatch) => {
    diseaseDefinitionsNodeClient.getAllDiseaseDefinitions()
    .then(({ diseaseDefinitions }) => {
      dispatch(diseaseDefinitionsSet(diseaseDefinitions))
    }).catch(error => {
      console.error(error)
    })
  }
};

export const diseaseDefinitionCreate = (user) => {
  return (dispatch) => {
    diseaseDefinitionsNodeClient.createDiseaseDefinition(user)
      .then((result) => {
        if (result.success == true) {
          dispatch(diseaseDefinitionsGetAll());
          dispatch(snackbarShow(result.message));
        }
      })
  }
};

export const diseaseDefinitionsDeleteSelected = () => {
  return (dispatch, getState) => {
    let diseaseDefinitions = getSelectedDiseaseDefinitions(getState());

    diseaseDefinitionsNodeClient.deleteDiseaseDefinitions(diseaseDefinitions)
      .then((result) => {
        if (result.success == true) {
          dispatch(diseaseDefinitionsGetAll());
          dispatch(snackbarShow(result.message));
          dispatch(diseaseDefinitionsSelectClear());
        }
      })
  }
};

export const diseaseDefinitionEdit = (updatedValues) => {
  return (dispatch, getState) => {
    let diseaseDefinition = _.first(getSelectedDiseaseDefinitions(getState()));
    let updatedDiseaseDefinition = _.assign(diseaseDefinition, updatedValues);

    diseaseDefinitionsNodeClient.updateDiseaseDefinitions([updatedDiseaseDefinition])
      .then((result) => {
        if (result.success == true) {
          dispatch(diseaseDefinitionsGetAll());
          dispatch(snackbarShow(result.message));
          dispatch(diseaseDefinitionsSelectClear());
          updateDiseaseDefinitionForm(dispatch, 'editDiseaseDefinitionForm', null);
        }
      })
  }
}
