import { LOGIN_USER } from './types.js';

export function logUserIn(email, password) {
  return dispatch => {
    return fetch('http://localhost:3000/api/v1/auth', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        Authorzation:
          'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoxfQ.x8mEyc8qrR50e7bEzPEl6qxGSbmFKk7FiKcw6YAxph0'
      },
      body: JSON.stringify({ email: email, password: password })
    })
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: LOGIN_USER,
          user_id: data.id,
          membershipId: data.membershipId,
          gamertag: data.user,
          token: data.token
        });
        localStorage.setItem('token', data.token);
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
          platform: data.platform,
          token: data.token
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
      }/Profile/${current_user.membershipId}/?components=100`
    )
      .then(res => res.json())
      .then(player =>
        this.dispatch({
          type: 'SET_CHARACTERS',
          characters: [...player.Response.profile.data.characterIds]
        })
      );
  };
}

export function setPlayerInformation(current_user) {
  return dispatch => {
    return fetch(
      `https://www.bungie.net/Platform/Destiny2/${
        current_user.platform
      }/Profile/${current_user.membershipId}/Character/${
        current_user.characterId
      }/?components=100`
    )
      .then(res => res.json())
      .then(player =>
        this.dispatch({
          type: 'SET_CHARACTER',
          light: player.Response.character.data.light,
          race: player.Response.character.data.raceHash,
          gender: player.Response.character.data.genderHash,
          class: player.Response.character.data.classHash,
          level: player.Response.character.data.levelProgression.level,
          playerEmblem: player.Response.character.data.emblemBackgroundPath
        })
      );
  };
}
