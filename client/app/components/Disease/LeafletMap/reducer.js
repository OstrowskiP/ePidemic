import { DISEASES_SET, ALL_DISEASES_SET, MAP_CENTER_SET } from './actions';

const initialState = {
  diseases: [],
  allDiseases: [],
  center: [51.74850142413528, 19.454770088195804]
};

const map = (state = initialState, action) => {
  switch (action.type) {

    case DISEASES_SET:
      return Object.assign({}, state, {
        diseases: action.diseases
      });

    case ALL_DISEASES_SET:
      return Object.assign({}, state, {
        allDiseases: action.diseases
      });

    case MAP_CENTER_SET:
      return Object.assign({}, state, {
        center: action.center
      });

    default:
      return state;
  }
};

export default map;
