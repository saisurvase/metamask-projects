import React, { useEffect, useState } from 'react'

import { Header, Sidebar } from '../../../commonPages'
import FormComponent from './FormComponent'
import { useFetchAPI, useGetTokenIdAPI } from '../../../hooks'
import { postUploadFileAPI, saveTokenAPI, editNftTokenAPI } from '../../../http/common.http.service'
import * as fixedData from '../../../helper/settings'
import { getFullRoute, showToastMessage } from '../../../helper/utility'
import { create,signMsgToUpdateNft } from '../../../web3Integration/global.service'

const {
    nftTokenListRoute
} = fixedData.routeName

function Form(props) {
    const { history, location: { actionInfo } = {} } = props
    const [uploadedFile, setUploadedFile] = useState(undefined)
    const [tokenId, setTokenId] = useState()
    const [isBlockchainLoading, setIsBlockchainLoading] = useState(false)
    
    const [
        {
            isLoading: isFileUploadLoading,
            response: { isSuccess: isFileUploadSuccess, data: { path: filePath = "" } = {} } = {}
        },
        getFileUpload
    ] = useFetchAPI()

    const [
        {
            isLoading: isSaveTokenLoading,
            response: { isSuccess: isSaveTokenSuccess, data: saveTokenData }
        },
        postSaveToken
    ] = useFetchAPI()

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
        if (isFileUploadLoading === false && isFileUploadSuccess && filePath) {
            setUploadedFile(filePath)
        }
    }, [isFileUploadLoading, isFileUploadSuccess, filePath])

    useEffect(() => {
        if (isSaveTokenLoading === false) {
            if (isSaveTokenSuccess && saveTokenData) {
                // console.log('saveTokenData===========-------------', saveTokenData)
                history.push({ pathname: getFullRoute(nftTokenListRoute) })
            } else {
                showToastMessage('Something went wrong...')
            }
        }
    }, [isSaveTokenLoading, isSaveTokenSuccess, saveTokenData])

    useEffect(() => {
        if (isTokenIdLoading === false) {
            if (isTokenIdSuccess && tokenIdData) {
                setTokenId(tokenIdData)
            }
        }
    }, [isTokenIdLoading, isTokenIdSuccess, tokenIdData])

    const handleOnSelectFile = file => {
        getFileUpload({
            api: postUploadFileAPI,
            payload: {
                token: '4db92ea0235af55e10a5501e9c9fa858',
                APPKEY: 'money_pot_app_125',
                body: {
                    file
                }
            }
        })
    }

    const handleOnClickSubmit = (formInfo, type) => {
        const properties = formInfo.properties && JSON.stringify(formInfo.properties)
        const body = { ...formInfo, properties }
        setIsBlockchainLoading(true)

        // console.log('body===============', body)

        if (type === 'submit') {
            (async () => {
                const info = await create(tokenId)
                const { status, transHash } = info || {}
                if (status) {
                    console.log(status)
                    postSaveToken({
                        api: saveTokenAPI,
                        payload: {
                           body: {
                               ...body,
                               transactionHash: transHash,
                               nftID: tokenId
                           }
                        }
                    })
                } else if (status === false) {
                    setIsBlockchainLoading(false)
                }
            })()
        } else if (type === 'update') {
            (async () => {
                
                const signature = await signMsgToUpdateNft(body);
if(signature){
body.signature=signature;
            postSaveToken({
                api: editNftTokenAPI,
                payload: {
                    body
                }
            })
            setIsBlockchainLoading(false)
        }
        else
        {
            setIsBlockchainLoading(false)
        }
        })();
        }
    }

    return (
        <>
            <Header history={history} />
            <Sidebar history={history} />
            <FormComponent
                isFileUploadLoading={isFileUploadLoading}
                isLoading={isSaveTokenLoading || isBlockchainLoading}
                actionInfo={actionInfo}
                uploadedFile={uploadedFile}
                onSelectFile={handleOnSelectFile}
                onClickFormSubmit={handleOnClickSubmit}
            />
        </>
    )
}

export default Form
