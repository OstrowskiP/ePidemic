import _ from 'lodash';

export const getDiseasesGroupedByName = state => {
  return _.groupBy(state.disease.map.diseases, 'name');
};

export const getCenter = state => state.disease.map.center;
