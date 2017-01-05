import { createSelector } from 'reselect';
import _ from 'lodash';

export const getSelectedDiseaseDefinitionsIndexes = state => state.disease.definition.selectedDiseaseDefinitions;
export const getDiseaseDefinitions = state => state.disease.definition.diseaseDefinitions;

export const getSelectedDiseaseDefinitions = createSelector(
  getDiseaseDefinitions,
  getSelectedDiseaseDefinitionsIndexes,
  (diseaseDefinitions, selectedDiseaseDefinitionsIndexes) => {
    return selectedDiseaseDefinitionsIndexes.map((selectedDiseaseDefinitionIndex) => {
      return diseaseDefinitions[selectedDiseaseDefinitionIndex];
    });
  }
);

export const getIsDiseaseDefinitionSelected = state => {
  return _.isEmpty(state.disease.definition.selectedDiseaseDefinitions);
};

