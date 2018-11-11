import config from './../../utils/config.json'

export function getProfileAPI(token) {
  return (dispatch) => {
    dispatch(profile())

    fetch('https://' + config.baseURL + '/profile', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    })
      .then(response => response.json())
      .then(data => dispatch(profileFulfilled(data)))
      .catch(err => dispatch(profileRejected(err)))
  }
}

function profile(refresh, page) {
  return {
    type: 'PROFILE_PENDING',
    refresh,
    page
  }
}

function profileFulfilled(data) {
  return {
    type: 'PROFILE_FULFILLED',
    data
  }
}

function profileRejected(err) {
  return {
    type: 'PROFILE_REJECTED',
    err
  }
}