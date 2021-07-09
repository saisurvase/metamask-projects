import { useState, useEffect } from 'react'

import { getIsRegister } from '../../http/common.http.service'
import useIsMounted from '../useIsMounted'
import useFetchAPI from '../useFetchAPI'

function useGetIsRegisterAPI() {
    const [params, setParams] = useState({})
    const [{ isLoading, error, response }, fetch] = useFetchAPI()
    const isMounted = useIsMounted()

    useEffect(() => {
        isMounted &&
        fetch({
            api: getIsRegister,
            payload: { 
                params
             }
        })
    }, [params])

    return [{ isLoading, error, response }, setParams]
}

export default useGetIsRegisterAPI
