import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { authAction } from '../../../actions'
import { getFullRoute, showToastMessage } from '../../../helper/utility'
import * as fixedData from '../../../helper/settings'
import { useFetchAPI } from '../../../hooks'
import { LoginAPI } from '../../../http/common.http.service'
import LoginComponent from './LoginComponent'

const {
    formRoute,
    auth: { registerRoute }
} = fixedData.routeName

function Login(props) {
    const { history } = props
    const tokenDispatch = useDispatch()

    const [
        {
            isLoading: isSignInLoading,
            response: { isSuccess: isSignInSuccess, data }
        },
        getSignIn
    ] = useFetchAPI()

    useEffect(() => {
        if (isSignInLoading === false && isSignInSuccess) {
            tokenDispatch({ type: authAction.SET_TOKEN, payload: 'logggggged in' })
            history.push({ pathname: getFullRoute(formRoute) })
        } else {
            data && showToastMessage(data)
        }
    }, [isSignInLoading, isSignInSuccess, data])

    const onClickSignIn = ({ username, password }) => {
        getSignIn({
            api: LoginAPI,
            payload: {
                body: {
                    username,
                    password
                }
            }
        })
    }

    const onClickSignUp = () => history.push({ pathname: getFullRoute(registerRoute) })

    return (
        <LoginComponent isLoading={isSignInLoading} onClickSignIn={onClickSignIn} onClickSignUp={onClickSignUp} />
    )
}

export default Login