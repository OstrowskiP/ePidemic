import { diseasesNodeClient } from '../../../core/index';
import { diseasesGetAll } from '../LeafletMap/actions';
import { snackbarShow } from '../../Common/SnackBar/actions';
import { resetForm } from '../../Common/actions';

export const diseaseAdd = (diseaseAsset) => {
  return dispatch => {
    diseasesNodeClient.createDisease(diseaseAsset)
      .then((result) => {
        if (result.success)
          dispatch(diseasesGetAll());
          dispatch(snackbarShow(result.message));
          resetForm(dispatch, 'diseaseAddForm');
      })
      .catch((error) => console.error(error));
  }
};
