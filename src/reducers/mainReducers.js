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

// add LOGIN USER dispatch handler for setting characters
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
        player_class: action.player_class,
        level: action.level,
        player_emblem: `https://www.bungie.net${action.player_emblem}`
      };
      // debugger;
      return {
        characters: [...state.characters, character]
      };
    case 'LOGIN_USER':
      let characters = [];
      if (action.characters) {
        action.characters.map(character => {
          characters = [
            ...characters,
            {
              light: character.light,
              race: character.race,
              gender: character.gender,
              player_class: character.player_class,
              level: character.level,
              player_emblem: character.player_emblem
            }
          ];
        });
      }
      return { characters: characters };
    case 'LOGOUT_USER':
      return { characters: [] };
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
