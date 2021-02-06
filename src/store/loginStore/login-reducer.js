import {CONFIRM_LOGIN} from './login-types';
const initialState = {
  isLogin: false,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case CONFIRM_LOGIN:
      return {
        ...state,
        isLogin: action.data,
      };

    default:
      return state;
  }
}
