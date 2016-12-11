import { DISEASE_DEFINITIONS_SET, DISEASE_DEFINITION_SELECT, DISEASE_DEFINITION_SELECT_CLEAR} from './actions';

const initialState = {
  diseaseDefinitions: [],
  selectedDiseaseDefinitions: []
};

const diseaseDefinitions = (state = initialState, action) => {
  switch (action.type) {

    case DISEASE_DEFINITIONS_SET:
      return Object.assign({}, state, {
        diseaseDefinitions: action.diseaseDefinitions
      });

    case DISEASE_DEFINITION_SELECT:
      return Object.assign({}, state, {
        selectedDiseaseDefinitions: action.diseaseDefinitions
      });

    case DISEASE_DEFINITION_SELECT_CLEAR:
      return Object.assign({}, state, {
        selectedDiseaseDefinitions: []
      });

    default:
      return state
  }
};

export default diseaseDefinitions;
