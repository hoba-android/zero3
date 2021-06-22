import Fast from '../models/Fast';

import {ADD_FAST} from '../const/types';

export const addFast = addedFast => {
  return {
    type: ADD_FAST,
    payload: addedFast,
  };
};
