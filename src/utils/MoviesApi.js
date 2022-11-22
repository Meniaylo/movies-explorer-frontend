import { MOVIES_API_URL } from './constants.js';

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  } else {
    return res.json()
      .then((data) => {
        throw(data)
      })
  }
};

export function getMovies() {
  return fetch(`${MOVIES_API_URL}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  }).then(checkResponse);
}