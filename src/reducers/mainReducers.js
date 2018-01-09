import { combineReducers } from 'redux';

let state;

function userLogin(
  state = {
    loggedInUser: ''
  },
  action
) {
  switch (action.type) {
    case 'LOGIN_USER':
      return Object.assign({}, state, {
        loggedInUser: action.current_user.loggedInUser
      });

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  current_user: userLogin
});

export default rootReducer;
