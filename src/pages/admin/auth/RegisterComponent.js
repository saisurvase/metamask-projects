import React, { useState } from 'react'

import { Button, ValidationTextComponent } from '../../../commonPages'

function RegisterComponent(props) {
    const { onClickSignIn } = props

    const [registerInfo, setRegisterInfo] = useState({ username: '', email: '', password: '' })
    const [warningMessage, setWarningMessage] = useState({ usernameWarningMessage: undefined, emailWarningMessage: undefined, passwordWarningMessage: undefined })

    const { usernameWarningMessage, emailWarningMessage, passwordWarningMessage} = warningMessage || {}
    const { username, email, password } = registerInfo

    const handleOnChange = info => {
        setRegisterInfo({ ...registerInfo, ...info })
    }

    const validation = () => {
        let status = true
        const warningMessage = {}
        if (!username) {
            warningMessage.usernameWarningMessage = 'Username required'
            status = false
        } else {
            warningMessage.usernameWarningMessage = undefined
        }
        if (!email) {
            warningMessage.emailWarningMessage = 'Email required'
            status = false
        } else {
            warningMessage.emailWarningMessage = undefined
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

    const onClickSubmit = () => {
        const status = validation()
        if (status) {
            console.log('status===========-------------', status, registerInfo)
        }
    }

    return (
        <body className="h-100">
            <div className="authincation h-100">
                <div className="container h-100">
                    <div className="row justify-content-center h-100 align-items-center">
                        <div className="col-md-6">
                            
                            <div className="authincation-content">
                                <div className="row no-gutters">
                                    <div className="col-xl-12">
                                        <div className="auth-form">
                                            <div className="text-center mb-3">
                                                <a href="index.html"><img src="images/logo-full.png" alt="" /></a>
                                            </div>
                                            <h4 className="text-center mb-4 text-white">Sign up your account</h4>
                                            <div className="form-group">
                                                <label className="mb-1 text-white"><strong>Username</strong></label>
                                                <input type="text" className="form-control" placeholder="username" value={username} onChange={e => handleOnChange({ username: e.target.value })} />
                                                <ValidationTextComponent validationMessage={usernameWarningMessage} />
                                            </div>
                                            <div className="form-group">
                                                <label className="mb-1 text-white"><strong>Email</strong></label>
                                                <input type="email" className="form-control" placeholder="hello@example.com" value={email} onChange={e => handleOnChange({ email: e.target.value })} />
                                                <ValidationTextComponent validationMessage={emailWarningMessage} />
                                            </div>
                                            <div className="form-group">
                                                <label className="mb-1 text-white"><strong>Password</strong></label>
                                                <input type="password" className="form-control" placeholder="password" value={password} onChange={e => handleOnChange({ password: e.target.value })} />
                                                <ValidationTextComponent validationMessage={passwordWarningMessage} />
                                            </div>
                                            <div className="text-center mt-4">
                                                <Button className="btn bg-white text-primary btn-block" label="Sign Up" /* isLoading={isLoading} */ onClick={onClickSubmit} />
                                            </div>
                                            <div className="new-account mt-3">
                                                <p className="text-white">Already have an account? <a className="text-white" role="button" onClick={onClickSignIn}>Sign In</a></p>
                                            </div>
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

export default RegisterComponent
