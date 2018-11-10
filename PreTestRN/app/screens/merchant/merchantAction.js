import config from './../../utils/config.json'

export function getMerchantAPI(token, refresh, page) {
  return (dispatch) => {
    dispatch(merchant(refresh, page))



    let get_page = page
    let per_page = config.limitPerPage

    if (refresh == true) {
      get_page = 1
      per_page = page * per_page
    }

    fetch('https://' + config.baseURL + '/merchant?page=1&limit=' + per_page, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    })
      .then(response => response.json())
      .then(data => dispatch(merchantFulfilled(refresh, page, data)))
      .catch(err => dispatch(merchantRejected(refresh, page, err)))
  }
}

function merchant(refresh, page) {
  return {
    type: 'MERCHANT_PENDING',
    refresh,
    page
  }
}

function merchantFulfilled(refresh, page, data) {
  return {
    type: 'MERCHANT_FULFILLED',
    refresh,
    page,
    data
  }
}

function merchantRejected(refresh, page, err) {
  return {
    type: 'MERCHANT_REJECTED',
    refresh,
    page,
    err
  }
}