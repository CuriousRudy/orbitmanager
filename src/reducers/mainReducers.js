import { combineReducers } from 'redux';

let state;

function userLogin(
  state = {
    user_id: '',
    membershipId: '',
    gamertag: '',
    token: ''
  },
  action
) {
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        user_id: action.user_id,
        membershipId: action.membershipId,
        gamertag: action.gamertag,
        token: action.token,
        platform: action.platform
      };

    case 'LOGOUT_USER':
      return {
        user_id: '',
        membershipId: '',
        gamertag: '',
        token: ''
      };
    default:
      return state;
  }
}

function toggleLogin(state = { status: false }, action) {
  switch (action.type) {
    case 'LOGIN_USER':
      if (action.token !== '') {
        return { status: true };
      }
      break;
    case 'LOGOUT_USER':
      return { status: false };
    default:
      return state;
  }
}

function setCharacters(state = { characters: [] }, action) {
  switch (action.type) {
    case 'SET_CHARACTERS':
      return [...action.characters];
    default:
      return state;
  }
}

function setPlayerInformation(
  state = {
    light: null,
    race: null,
    gender: null,
    class: null,
    level: null,
    playerEmblem: null
  },
  action
) {
  switch (action.type) {
    case 'SET_CHARACTER':
      return {
        light: action.light,
        race: action.race,
        gender: action.gender,
        class: action.class,
        level: action.level,
        playerEmblem: `https://www.bungie.net${action.playerEmblem}`
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  current_user: userLogin,
  isLoggedIn: toggleLogin,
  characterIds: setCharacters,
  playerInformation: setPlayerInformation
});

export default rootReducer;
