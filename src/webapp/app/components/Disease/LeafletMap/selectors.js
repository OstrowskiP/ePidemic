import _ from 'lodash';
import { createSelector } from 'reselect';

export const getDiseasesGroupedByName = state => {
  return _.groupBy(state.disease.map.diseases, 'name');
};

export const getAllDiseasesGroupedByName = state => {
  return _.groupBy(state.disease.map.allDiseases, 'name');
};

export const getDiseasesNames = createSelector(
  getAllDiseasesGroupedByName,
  (diseasesGroupedByName) => {
    return _.keys(diseasesGroupedByName);
  }
);
export const getCenter = state => state.disease.map.center;
