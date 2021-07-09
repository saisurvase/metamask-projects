import React, { useEffect, useState } from 'react'

import { getAccount, create } from './global.service'
import { useGetTokenIdAPI } from '../hooks'

function Test() {
    const [tokenId, setTokenId] = useState()

    const [
        {
          isLoading: isTokenIdLoading,
          response: { isSuccess: isTokenIdSuccess, data: tokenIdData }
        },
        getTokenid
    ] = useGetTokenIdAPI()

    useEffect(() => {
        getTokenid({})
    }, [])

    useEffect(() => {
        if (isTokenIdLoading === false) {
            if (isTokenIdSuccess && tokenIdData) {
                setTokenId(tokenIdData)
            }
        }
    }, [isTokenIdLoading, isTokenIdSuccess, tokenIdData])

    // getAccount().then(function(vlaue) {
    //     console.log('accounts==============----------', vlaue)
    // })

    const onClickCreate = () => create(tokenId)

    return (
        <button onClick={onClickCreate}>Create</button>
    )
}

export default Test