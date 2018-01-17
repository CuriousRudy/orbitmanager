import { combineReducers } from 'redux';

let state;

//handles the login user credentials
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

//toggles logged in status
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

function setPlayerClan(state = { clanId: null }, action) {
  switch (action.type) {
    case 'JOIN_CLAN':
      return action.clan;
    case 'LOGIN_USER':
      return action.clan[0].id;
    case 'LOGOUT_USER':
      return null;
    default:
      return state;
  }
}

//sets character id info for character import
function setCharacters(state = { characterIds: [] }, action) {
  switch (action.type) {
    case 'SET_CHARACTERS':
      return [...action.characters];
    default:
      return state;
  }
}

// sets the information for each player character
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

function getClanInfo(
  state = {
    allClans: [{ name: 'There are no Clans!' }]
  },
  action
) {
  switch (action.type) {
    case 'FETCH_CLANS':
      return [...action.clans];
    case 'LOGOUT_USER':
      return [];
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  current_user: userLogin,
  isLoggedIn: toggleLogin,
  characterIds: setCharacters,
  characterDetails: setPlayerInformation,
  allClans: getClanInfo,
  clanId: setPlayerClan
});

export default rootReducer;
