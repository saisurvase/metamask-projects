import React, { useState } from 'react'

import { Button, ValidationTextComponent } from '../../../commonPages'
import { showToastMessage } from '../../../helper/utility'

function LoginComponent(props) {
    const { isLoading, onClickSignIn, onClickSignUp } = props

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [warningMessage, setWarningMessage] = useState({ userNameWarningMessage: undefined, passwordWarningMessage: undefined })
    const { userNameWarningMessage, passwordWarningMessage} = warningMessage || {}

    const validation = () => {
        let status = true
        const warningMessage = {}
        if (!username) {
            warningMessage.userNameWarningMessage = 'Username required'
            status = false
        } else {
            warningMessage.userNameWarningMessage = undefined
        }
        if (!password) {
            warningMessage.passwordWarningMessage = 'Password required'
            status = false
        } else {
            warningMessage.passwordWarningMessage = undefined
        }

        setWarningMessage(warningMessage)

        return status
    }

    const onClickForgotPassword = () => showToastMessage('Comming Soon...', 'warn')

    const onClickSubmit = () => {
        
        sessionStorage.setItem("key", "value");

        const status = validation()
        if (status) {

            onClickSignIn({ username, password })
           
        }
    }

    return (
        <body className="h-100">
            <div className="authincation h-100" style={{ marginTop: 50 }}>
                <div className="container h-100">
                    <div className="row justify-content-center h-100 align-items-center">
                        <div className="col-md-6">
                            <div className="authincation-content">
                                <div className="row no-gutters">
                                    <div className="col-xl-12">
                                        <div className="auth-form">
                                            <div className="text-center mb-3">
                                                <a><img src="./assets/images/logo-full.png" alt="" /></a>
                                            </div>
                                            <h4 className="text-center mb-4 text-white">Sign in your account</h4>
                                            <div className="form-group">
                                                <label className="mb-1 text-white"><strong>Username</strong></label>
                                                <input type="text" className="form-control" placeholder="username" value={username} onChange={e => setUsername(e.target.value)} />
                                                <ValidationTextComponent validationMessage={userNameWarningMessage} />
                                            </div>
                                            <div className="form-group">
                                                <label className="mb-1 text-white"><strong>Password</strong></label>
                                                <input type="password" className="form-control" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
                                                <ValidationTextComponent validationMessage={passwordWarningMessage} />
                                            </div>
                                            <div className="form-row d-flex justify-content-between mt-4 mb-2">
                                                <div className="form-group">
                                                <div className="custom-control custom-checkbox ml-1 text-white">
                                                        <input type="checkbox" className="custom-control-input" id="basic_checkbox_1" />
                                                        <label className="custom-control-label" for="basic_checkbox_1">Remember my preference</label>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <a className="text-white" role="button" onClick={onClickForgotPassword}>Forgot Password?</a>
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <Button className="btn bg-white text-primary btn-block" label="Sign In" isLoading={isLoading} onClick={onClickSubmit} />
                                            </div>
                                            {/* <div className="new-account mt-3">
                                                <p className="text-white">Don't have an account? <a className="text-white" role="button" onClick={onClickSignUp}>Sign Up</a></p>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default LoginComponent