// const API_BASE = 'http://codetentacles-006-site18.htempurl.com'
const API_BASE = 'https://autoxify.com/gamedappapi'

const ERROR_MESSAGE = 'Something went wrong. Please try again later.'

const formatHTTPResponse = httpResponse => {
  // console.log('status', httpResponse.status)
  if (httpResponse.ok && httpResponse.status === 200) {
    return httpResponse.json()
  }
  return { isSuccess: false, message: ERROR_MESSAGE }
}

const formatErrorResponse = error => {
  return { isSuccess: false, message: error.message || ERROR_MESSAGE }
}

const header = (payload, isHiddenContentType) => {
  const headers = {
    'Content-type': 'application/json',
    // 'Content-type': 'application/x-www-form-urlencoded',
    ...(payload.token && { token: payload.token }),
    ...payload.headers,
    ...(payload.APPKEY && { APPKEY: payload.APPKEY})
  }

  if (headers['Content-type'] === null || isHiddenContentType) {
    delete headers['Content-type']
  }

  Object.keys(headers).forEach(key => !headers[key] && delete headers[key])

  return headers
}

const APIPath = (endPoint, params) => {
  let querystring = ''
  if (params) {
    querystring = `${querystring}&${Object.keys(params)
      .map(key => `${key}=${encodeURIComponent(params[key])}`)
      .join('&')}`
  }
  // const path = `${API_BASE + getApiPort(endPoint)}/${endPoint}`
  let path = ''
  if (endPoint.indexOf('://') >= 0) {
    path = endPoint
  } else {
    path = `${API_BASE}/${endPoint}`
  }
  return querystring === '' ? path : `${path}?${querystring}`
}

// GET
const GET = subPath => payload => {
  return fetch(APIPath(subPath, payload.params), {
    method: 'GET',
    headers: header(payload)
  })
    .then(response => formatHTTPResponse(response))
    .catch(error => formatErrorResponse(error))
}
  
// POST
const POST = subpath => payload => {
  return fetch(APIPath(subpath, payload.params), {
    method: 'POST',
    headers: header(payload),
    body: JSON.stringify(payload.body)
  })
    .then(response => formatHTTPResponse(response))
    .catch(error => formatErrorResponse(error))
}

// PUT 
const PUT = subPath => payload => {
  return fetch(APIPath(subPath, payload.params), {
    method: 'put',
    headers: header(payload),
    body: JSON.stringify(payload.body)
  })
    .then(response => formatHTTPResponse(response))
    .catch(error => formatErrorResponse(error))
}

// File upload
const FILE_UPLOAD = subpath => payload => {
  const formdata = new FormData()
  Object.keys(payload.body).forEach(key => {
    if (Object.prototype.toString.call(payload.body[key]) === '[object Array]') {
    payload.body[key].map((v, index) =>
        Object.keys(v).map(item => formdata.append(`${String(key)}[${index}][${item}]`, `${String(v[item])}`))
    )
    } else {
        formdata.append(String(key), payload.body[key])
    }
  })

  return fetch(APIPath(subpath, payload.params), {
    method: 'POST',
    headers: header(payload, true),
    body: formdata,
    redirect: 'follow'
  })
    .then(response => formatHTTPResponse(response))
    .catch(error => formatErrorResponse(error))
}

export { GET, POST, PUT, FILE_UPLOAD }