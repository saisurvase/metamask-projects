import { useState, useEffect, useReducer } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { SHOW_ERROR_MESSAGE, RESET_ERROR_MESSAGE } from '../actions'
import { handleFetch, manipulateFetchedData } from '../helper/fetchUtility'
import useIsMounted from './useIsMounted'

const inititalState = {
  isLoading: null,
  error: null,
  response: {}
}
const dataFetchReducer = (state = inititalState, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return { ...state, isLoading: true, response: {}, error: null }
    case 'FETCH_SUCCESS':
      return { ...state, isLoading: false, response: action.payload, error: null }
    case 'FETCH_FAILURE':
      return { ...state, isLoading: false, ...action.payload }
    default:
      return inititalState
  }
}

const useFetchAPI = () => {
  const [{ api, payload }, setAPI] = useState({})
  const [{ isLoading, error, response }, dispatch] = useReducer(dataFetchReducer, inititalState)
//   const sagaDispatch = useDispatch()
//   const userId = useSelector(getUserId)
  const isMounted = useIsMounted()

  useEffect(() => {
    if (api && payload) {
      const fetchData = async () => {
        dispatch({ type: 'FETCH_INIT' })
        // sagaDispatch({ type: RESET_ERROR_MESSAGE })
        let result
        try {
          result = await handleFetch({ api, payload /* , sagaDispatch, userId */ })
          manipulateFetchedData({ isMounted, result, dispatch })
        } catch (error) {
          isMounted &&
            dispatch({
              type: 'FETCH_FAILURE',
              payload: { response: result, error: error.message || 'Something went wrong. Please try later' }
            })
        //   sagaDispatch({ type: SHOW_ERROR_MESSAGE, error: error.message || 'Something went wrong. Please try later' })
        }
      }

      fetchData()
    }
  }, [api, payload])

  return [{ isLoading, error, response }, setAPI]
}

export default useFetchAPI
