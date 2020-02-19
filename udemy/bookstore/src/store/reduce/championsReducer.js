import * as actionType from '../action/action';
import { updateObj } from '../utility';

const initialState = {
  filter: {
    cost: [],
    class: [],
    origin: []
  }
};

const filterChampions = (state, action) => {
  const categoryValue = action.value;
  const categoryName = action.category;
  const categories = {...state.filter};
  const categoryCurrent = categories[categoryName];
  const categoryFilter = categoryCurrent.filter(item => (item !== categoryValue));
  const categoryUpdate = (categoryFilter.length === categoryCurrent.length) ? categoryCurrent.concat(categoryValue) : categoryFilter;
  const updatedFilter = updateObj(state.filter, {[categoryName]: categoryUpdate});
  const updatedState = {
    filter: updatedFilter
  };
  return updateObj(state, updatedState);
};

const resetChampions = (state, action) => {
  const updatedState = {
    filter: {
      cost: [],
      class: [],
      origin: []
    }
  };

  return updateObj(state, updatedState);
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FILTER: return filterChampions(state, action);      
    case actionType.RESET: return resetChampions(state, action);
    default:
  }
  
  return state;
};

export default reducer;