import React from 'react'

import { getFullRoute, showToastMessage } from '../../../helper/utility'
import * as fixedData from '../../../helper/settings'
import RegisterComponent from './RegisterComponent'

const {
    auth: { loginRoute }
} = fixedData.routeName

function Register(props) {
    const { history } = props

    const onClickSignIn = () => history.push({ pathname: getFullRoute(loginRoute) })

    return <RegisterComponent onClickSignIn={onClickSignIn} />
}

export default Register