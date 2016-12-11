import { diseasesNodeClient } from '../../../core/index';

export const DISEASES_SET = 'DISEASES_SET';
export const ALL_DISEASES_SET = 'ALL_DISEASES_SET';
export const MAP_CENTER_SET = 'MAP_CENTER_SET';

export const diseasesSet = (diseases) => {
  return {
    type: DISEASES_SET,
    diseases
  }
};

export const allDiseasesSet = (diseases) => {
  return {
    type: ALL_DISEASES_SET,
    diseases
  }
};

export const mapCenterSet = (center) => {
  return {
    type: MAP_CENTER_SET,
    center
  }
};

export const diseasesGetAll = () => {
  return dispatch => {
    diseasesNodeClient.getAllDiseases()
      .then((result) => {
        dispatch(diseasesSet(result.diseases));
        dispatch(allDiseasesSet(result.diseases));
      })
      .catch((error) => console.error(error));
  }
};

export const diseasesGetByName = (name) => {
  return dispatch => {
    diseasesNodeClient.getAllDiseases()
      .then(({ diseases }) => {
        let result = _.filter(diseases, (disease) => {
          return disease.definition.name == name;
        });

        dispatch(diseasesSet(result));
      })
      .catch((error) => console.error(error));
  }
};
