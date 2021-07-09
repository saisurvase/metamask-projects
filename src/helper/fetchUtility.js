/**
 * Callback for dispatch function
 *
 * @callback dispatchCallback
 * @param {Object} action
 * @param {string} action.type
 * @param {Object} action.payload
 *
 * @function manipulateFetchedData
 * @param {Object} fetchedData
 * @param {Boolean} fetchedData.isMounted - if the calling component is mounted
 * @param {Object} fetchedData.result - response from an API
 * @param {dispatchCallback} fetchedData.dispatch
 */
export const manipulateFetchedData = ({ isMounted, result, dispatch }) => {
  if (isMounted) {
    if (result) {
      // if (result.isSuccess) {
      dispatch({ type: 'FETCH_SUCCESS', payload: result })
    } else {
      const errorMessage = (result.errors ? Object.values(result.errors)[0] : result.message) || 'Something went wrong. Please try later'
      // dispatch({ type: 'FETCH_FAILURE', payload: errorMessage })
      throw new Error(errorMessage)
    }
  }
}

/**
 * It creates an http request, on success/error the response is returned
 *
 * @function fetchData
 * @param {Function} api
 * @param {Object} payload
 * @returns {Object}
 */
 export const fetchData = async (api, payload) => {
  const response = await api(payload)
  // console.log('response==============', response)
  return response
}

export const handleFetch = async ({ api, payload /*, sagaDispatch, userId */ }) => {
  if (payload.token) {
    console.log('api & payload===========', api, payload)
    const withFirstTokenResponse = await fetchData(api, payload)
    // if (withFirstTokenResponse.message === 'jwt expired') {
    //   const refreshedToken = await refreshToken(userId)
    //   sagaDispatch({ type: authAction.SET_REFRESHED_TOKEN, payload: { token: refreshedToken } })

    //   return fetchData(api, { ...payload, token: refreshedToken })
    // }
    return withFirstTokenResponse
  }
  return fetchData(api, payload)
}