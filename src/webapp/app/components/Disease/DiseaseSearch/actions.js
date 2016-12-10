import _ from 'lodash';
import { diseasesGetByName } from '../LeafletMap/actions';
import { mapCenterSet } from '../LeafletMap/actions';

export const displaySearchResults = ({ area, name }) => {
  return dispatch => {
    if (!_.isEmpty(name))
      dispatch(diseasesGetByName(name));

    if (!_.isEmpty(area))
      fetch(
        `http://nominatim.openstreetmap.org/search?city=${ area }&format=json&accept-language=pl`
      ).then(response => {
        if (!response.ok)
          return false;

        return response.json()
          .then(result => {
            let { lat, lon } = _.first(result);

            dispatch(mapCenterSet([lat, lon]));
          })
      }
      );
  }
};
