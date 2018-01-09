import { LOGIN_USER } from './types.js';

export function loginUser(email, password) {
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
      .then(data =>
        dispatch({
          type: LOGIN_USER,
          current_user: { loggedInUser: data.user_id }
        })
      );
  };
}
