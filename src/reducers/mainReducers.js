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
      if (action.clan[0]) {
        return action.clan[0].id;
      }
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

function getGroups(state = { groups: [] }, action) {
  switch (action.type) {
    case 'FETCH_GROUPS':
      return [...action.groups];
    case 'ADD_GROUP':
      return [...state, action.group];
    default:
      return state;
  }
}
function getForums(state = { allForums: [] }, action) {
  switch (action.type) {
    case 'FETCH_FORUMS':
      return { allForums: [...action.forums] };
    default:
      return state;
  }
}

function setForum(state = { displayedForum: '' }, action) {
  switch (action.type) {
    case 'SET_FORUM':
      return action.forum;
    default:
      return state;
  }
}

function setMessages(state = { messages: [] }, action) {
  switch (action.type) {
    case 'SET_MESSAGES':
      return { messages: [...action.messages] };
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
      return { allClans: [...action.clans] };
    case 'ADD_CLAN':
      debugger;
      return { allClans: [...state.allClans, action.clan] };
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
  clanId: setPlayerClan,
  allForums: getForums,
  displayedForum: setForum,
  currentForumMessages: setMessages,
  groupsList: getGroups
});

export default rootReducer;
