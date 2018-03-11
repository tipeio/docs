import 'whatwg-fetch'
import Cookies from 'js-cookie'

const config = {
  secure: !process.env.local,
  domain: 'tipe.io'
}

export const getCookie = () => Cookies.get(process.env.COOKIE_NAME, config)
export const eraseCookie = () => {
  Cookies.remove(process.env.COOKIE_NAME, config)
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 302) {
    return response
  } else {
    if (response.status === 401) {
      eraseCookie()
    }
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

export const isAuth = () => !!getCookie()
export const getUser = () => {
  if (!isAuth()) {
    return Promise.resolve(false)
  }
  const cookie = getCookie()
  return fetch(process.env.API_URL + '/getUser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${cookie}` // jwt
    }
  })
    .then(checkStatus)
    .then(resp => resp.json())
    .then(data => {
      if (data.user) {
        window.analytics.identify(data.user.id, {
          firstName: data.user.firstName,
          lastName: data.user.lastName,
          email: data.user.email
        })
      }
      return data.user
    })
    .catch(e => {

    })
}
