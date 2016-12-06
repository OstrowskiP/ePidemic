import { DISEASES_SET } from './actions';

const initialState = {
  diseases: [],
  center: [51.74850142413528, 19.454770088195804]
};

const map = (state = initialState, action) => {
  switch (action.type) {

    case DISEASES_SET:
      return Object.assign({}, state, {
        diseases: action.diseases
      });

    default:
      return state;
  }
};

export default map;
