import { combineReducers } from 'redux';

let state;

function userLogin(
  state = {
    user_id: '',
    membershipId: '',
    gamertag: '',
    platform: ''
  },
  action
) {
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        user_id: action.user_id,
        membershipId: action.membershipId,
        gamertag: action.gamertag,
        platform: action.platform
      };

    case 'LOGOUT_USER':
      return {
        user_id: '',
        membershipId: '',
        gamertag: '',
        platform: ''
      };
    default:
      return state;
  }
}

function toggleLogin(state = { status: false }, action) {
  switch (action.type) {
    case 'LOGIN_USER':
      return { status: true };
    case 'LOGOUT_USER':
      return { status: false };
    default:
      return state;
  }
}

function setCharacters(state = { characterIds: [] }, action) {
  switch (action.type) {
    case 'SET_CHARACTERS':
      return [...action.characters];
    default:
      return state;
  }
}

function setPlayerInformation(
  state = {
    characters: []
  },
  action
) {
  switch (action.type) {
    case 'SET_CHARACTER':
      const character = {
        light: action.light,
        race: action.race,
        gender: action.gender,
        class: action.class,
        level: action.level,
        player_emblem: `https://www.bungie.net${action.player_emblem}`
      };
      return { characters: [...state.characters, character] };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  current_user: userLogin,
  isLoggedIn: toggleLogin,
  characterIds: setCharacters,
  characterDetails: setPlayerInformation
});

export default rootReducer;
