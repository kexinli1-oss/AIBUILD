// reducers.js
import { SET_CATEGORIES } from '../actions/actions';

const initialState = {
  categories: [],
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};



