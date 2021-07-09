import { useState, useEffect } from 'react'

import { getTokenidAPI } from '../../http/common.http.service'
import useIsMounted from '../useIsMounted'
import useFetchAPI from '../useFetchAPI'

function useGetTokenIdAPI() {
    const [params, setParams] = useState({})
    const [{ isLoading, error, response }, fetch] = useFetchAPI()
    const isMounted = useIsMounted()

    useEffect(() => {
        isMounted &&
        fetch({
            api: getTokenidAPI,
            payload: { 
                params
             }
        })
    }, [params])

    return [{ isLoading, error, response }, setParams]
}

export default useGetTokenIdAPI
