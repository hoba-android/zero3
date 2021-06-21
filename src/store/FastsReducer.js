import FASTS from '../../src/data/dummyFasts';

import {ADD_FAST} from '../const/types';

const initialState = {
  fasts: FASTS,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAST:
      console.log('add fast reducer called', action.payload);
      return {
        ...state,
        fasts: state.fasts.concat(action.payload),
      };

    default:
      return state;
  }
};
