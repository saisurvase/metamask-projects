import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import Header from '../../../commonPages/Header'
import Sidebar from '../../../commonPages/Sidebar'
import { getNftTokenListAPI } from '../../../http/common.http.service'
import NftTokenListComponent from './NftTokenListComponent'
import { useFetchAPI } from '../../../hooks'
import { Loader } from '../../../commonPages'
import * as fixedData from '../../../helper/settings'
import { getFullRoute } from '../../../helper/utility'


const {
    formRoute
} = fixedData.routeName

function NftTokenList(props) {
    const { history, location: { type = 'sold' } = {} } = props

    const [nftTokenList, setNftTokenList] = useState(undefined)
    
    const auth = useSelector(state => state.admin.app.auth)


    console.log('auth-===================', auth)

    const [
        {
            isLoading: isNftTokenListLoading,
            response: { isSuccess: isNftTokenListSuccess, data: nftTokenListData },
        },
        getNftTokenList
    ] = useFetchAPI()

    useEffect(() => {
        getNftTokenList({
            api: getNftTokenListAPI,
            payload: {
                params: {
                    type
                }
            }
        })
    }, [type])

    useEffect(() => {
        if (isNftTokenListLoading === false) {
            if (isNftTokenListSuccess && nftTokenListData && nftTokenListData.length) {
                setNftTokenList(nftTokenListData)
            } else {
                setNftTokenList([])
            }
        }
    }, [isNftTokenListLoading, isNftTokenListSuccess, nftTokenListData])

    const onClickAction = (item, action) => {
        // console.log('action=====================', action, item)
        if (action === "edit" || action === 'view') {
            history.push({ pathname: getFullRoute(formRoute), actionInfo: { item, action } })
        }
    }

   

    return (
        <body>
            <Header history={history} />
            <Sidebar history={history} />
            {isNftTokenListLoading ? (
                <Loader isLoaderActive={isNftTokenListLoading} />
            ) : (
                <NftTokenListComponent list={nftTokenList} type={type} onClickAction={onClickAction} />
                // <h3>hellow </h3>
            )}
        </body>
    )
}

export default NftTokenList
