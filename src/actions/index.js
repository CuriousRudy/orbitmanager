import { LOGIN_USER } from './types.js';

// logs the user in, sets player information to state
export function logUserIn(email, password) {
  return dispatch => {
    return fetch('http://localhost:3000/api/v1/auth', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify({ email: email, password: password })
    })
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: 'LOGIN_USER',
          user_id: data.id,
          membershipId: data.membershipId,
          gamertag: data.user,
          platform: data.platform,
          characters: [...data.characters],
          clan: data.clan
        });
        localStorage.setItem('token', data.token);
      });
  };
}

//checks token for authentication, sets player information to state if valid
export function checkLoginStatus(token) {
  return dispatch => {
    return fetch('http://localhost:3000/api/v1/current_user', {
      headers: {
        'Content-Type': 'Application/json',
        Accept: 'Application/json',
        Authorization: token
      }
    })
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: LOGIN_USER,
          user_id: data.id,
          membershipId: data.membershipId,
          gamertag: data.gamertag,
          platform: data.platform,
          characters: [...data.characters],
          clan: data.clan
        });
      });
  };
}

//creates a new user in the database, sets player information to state
export function signUserUp(user) {
  return dispatch => {
    return fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        Authorization: null
      },
      body: JSON.stringify({ ...user })
    })
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: LOGIN_USER,
          user_id: data.id,
          membershipId: data.membershipId,
          gamertag: data.user,
          platform: data.platform
        });
        localStorage.setItem('token', data.token);
      });
  };
}

export function createClan(clanInfo) {
  return dispatch => {
    return fetch('http://localhost:3000/api/v1/clans', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'Application/json',
        Authorization: localStorage.getItem('token')
      },
      body: JSON.stringify({ ...clanInfo })
    })
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: 'ADD_CLAN',
          clan: data
        });
      });
  };
}

export function joinClan(clanId) {
  return dispatch => {
    return fetch('http://localhost:3000/api/v1/memberships', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        Authorization: localStorage.getItem('token')
      },
      body: JSON.stringify({ clan_id: clanId })
    })
      .then(res => res.json())

      .then(data =>
        dispatch({
          type: 'JOIN_CLAN',
          clan: data.clan_id
        })
      );
  };
}

export function fetchForums() {
  return dispatch => {
    return fetch('http://localhost:3000/api/v1/forums', {
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        Authorization: localStorage.getItem('token')
      }
    })
      .then(res => res.json())
      .then(data =>
        dispatch({
          type: 'FETCH_FORUMS',
          forums: data
        })
      );
  };
}

export function getMessages(forumId) {
  return dispatch => {
    // debugger;
    fetch(`http://localhost:3000/api/v1/forums/${forumId}`, {
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        Authorization: localStorage.getItem('token')
      }
    })
      .then(res => res.json())
      .then(data => dispatch({ type: 'SET_MESSAGES', messages: [...data] }));
  };
}

export function createMessage(forum, content) {
  return dispatch => {
    return fetch('http://localhost:3000/api/v1/messages', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        Authorization: localStorage.getItem('token')
      },
      body: JSON.stringify({ forum_id: forum, content: content })
    }).then(res => res.json());
  };
}

//fetches the charater Ids from destiny's api, sets them to state to fetch the character info
export function getPlayerCharacters(current_user) {
  return dispatch => {
    return fetch(
      `https://www.bungie.net/Platform/Destiny2/${
        current_user.platform
      }/Profile/${current_user.membershipId}/?components=100`,
      {
        headers: { 'x-api-key': '1e8df2625cb24d04938314296f91f366' }
      }
    )
      .then(res => res.json())
      .then(player => {
        dispatch({
          type: 'SET_CHARACTERS',
          characters: player.Response.profile.data.characterIds
        });
      });
  };
}

//takes the character information and sets the characters to state to import
export function setPlayerInformation(current_user, character) {
  console.log('sup');
  return dispatch => {
    return fetch(
      `https://www.bungie.net/Platform/Destiny2/${
        current_user.platform
      }/Profile/${
        current_user.membershipId
      }/Character/${character}/?components=200`,
      {
        headers: { 'x-api-key': '1e8df2625cb24d04938314296f91f366' }
      }
    )
      .then(res => res.json())
      .then(player =>
        dispatch({
          type: 'SET_CHARACTER',
          light: player.Response.character.data.light,
          race: player.Response.character.data.raceHash,
          gender: player.Response.character.data.genderHash,
          player_class: player.Response.character.data.classHash,
          level: player.Response.character.data.levelProgression.level,
          player_emblem: player.Response.character.data.emblemBackgroundPath
        })
      );
  };
}

//posts the character details to the backend to persist the player's characters
export function postCharacter(character) {
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/characters`, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        Authorization: localStorage.getItem('token')
      },
      body: JSON.stringify({ ...character })
    });
  };
}

export function getAllClans() {
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/clans`, {
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        Authorization: localStorage.getItem('token')
      }
    })
      .then(res => res.json())
      .then(clans =>
        dispatch({
          type: 'FETCH_CLANS',
          clans: clans
        })
      );
  };
}
