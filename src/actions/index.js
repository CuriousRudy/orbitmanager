import { LOGIN_USER } from './types.js';

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
          platform: data.platform
        });
        localStorage.setItem('token', data.token);
      });
  };
}

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
          platform: data.platform
        });
      });
  };
}

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
          characters: [...player.Response.profile.data.characterIds]
        });
      });
  };
}

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
          class: player.Response.character.data.classHash,
          level: player.Response.character.data.levelProgression.level,
          player_emblem: player.Response.character.data.emblemBackgroundPath
        })
      );
  };
}

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
