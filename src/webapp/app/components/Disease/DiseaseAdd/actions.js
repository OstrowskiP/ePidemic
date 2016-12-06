import { diseasesNodeClient } from '../../../core/index';
import { diseasesGetAll } from '../LeafletMap/actions';
import { snackbarShow } from '../../Common/SnackBar/actions';

export const diseaseAdd = (diseaseAsset) => {
  return dispatch => {
    diseasesNodeClient.createDisease(diseaseAsset)
      .then((result) => {
        if (result.success)
          dispatch(diseasesGetAll());
          dispatch(snackbarShow(result.message));
      })
      .catch((error) => console.error(error));
  }
};
