import _ from 'lodash';

export const getDiseasesGroupedByName = state => {
  return _.groupBy(state.map.diseases, 'name');
};

export const getCenter = state => state.map.center;
