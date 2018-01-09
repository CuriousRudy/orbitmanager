import React from 'react';
import reduxThunk from 'reduxThunk'

const token = localStorage.getItem('token')
const headers = return {'accept':'application/json', 'content-type': 'application/json', 'Authorization': token }

 const loginUser = user => {
  return dispatch => {
    fetch('http://localhost:3001/api/v1/auth', { headers: headers } )
      .then(res => res.json())
      .then(data => {
        dispatch({ type: loginUser, payload: data });
      });
  };
};
