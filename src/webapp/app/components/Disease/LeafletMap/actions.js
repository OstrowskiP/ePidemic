import { diseasesNodeClient } from '../../../core/index';

export const DISEASES_SET = 'DISEASES_SET';

export const diseasesSet = (diseases) => {
  return {
    type: DISEASES_SET,
    diseases
  }
};

export const diseasesGetAll = () => {
  return dispatch => {
    diseasesNodeClient.getAllDiseases()
      .then((result) => {
        dispatch(diseasesSet(result.diseases));
      })
      .catch((error) => console.error(error));
  }
};
