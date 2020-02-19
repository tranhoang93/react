import * as actionType from '../action/action';

const initialState = {
  value: ""
};

const searchReducer = (state = initialState, action) => {
  if (action.type === actionType.SEARCH) {
    return {
      ...state,
      value: action.value
    }
  }

  if (action.type === actionType.DELETE) {
    return {
      ...state,
      value: ""
    }
  }

  return state;
};

export default searchReducer;