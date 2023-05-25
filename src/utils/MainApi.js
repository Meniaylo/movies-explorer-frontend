import { MAIN_API_URL } from './constants.js';

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

