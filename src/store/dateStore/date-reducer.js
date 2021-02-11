import {calcFullDateNow} from '../../utils/date';

const initialState = {
  fullDateNow: calcFullDateNow(),
};

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
