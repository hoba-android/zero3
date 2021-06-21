import Fast from '../models/Fast';

import {ADD_FAST} from '../const/types';

export const addFast = addedFast => {
  console.log('add fast action called', addedFast);
  return {
    type: ADD_FAST,
    payload: addedFast,
  };
};
