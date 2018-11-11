import config from './../../utils/config.json'

export function email(value) {
  return {
    type: 'EMAIL',
    email: value
  }
}

export function password(value) {
  return {
    type: 'PASSWORD',
    password: value
  }
}

export function loginAPI(form) {
  return (dispatch) => {
    dispatch(login())

    fetch('https://' + config.baseURL + '/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "username": form.email,
        "password": form.password,
        "device_id": "deviceid",
        "imei": "1231231231231234",
        "push_token": "pushnotificationtoken"
      })
    })
      .then(response => response.json())
      .then(data => dispatch(loginFulfilled(data)))
      .catch(err => dispatch(loginRejected(err)))
  }
}

function login() {
  return {
    type: 'LOGIN_PENDING'
  }
}

function loginFulfilled(data) {
  return {
    type: 'LOGIN_FULFILLED',
    data
  }
}

function loginRejected(err) {
  return {
    type: 'LOGIN_REJECTED',
    err
  }
}

export function resetData() {
  return {
    type: 'RESET_DATA'
  }
}

export function logout() {
  return {
    type: 'LOGOUT'
  }
}