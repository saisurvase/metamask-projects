import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Modal from 'react-modal'

import { authAction } from '../../../actions'
import { useFetchAPI } from '../../../hooks'
import { postUploadProfilePicAPI, postRegistrationAPI, postUpdateProfileAPI } from '../../../http/common.http.service'
import { getAccount, signMsg } from '../../../web3Integration/global.service'
import { Avatar, Button, FileDropSection, ValidationTextComponent } from '../../../commonPages'
import { refreshPage, showToastMessage, isValidEmailAddress } from '../../../helper/utility'

function Register(props) {
    const { isVisible, editModalInfo, onClickClose } = props
    const [registerInfo, setRegisterInfo] = useState(editModalInfo || {})
    const [updatedData, setUpdatedData] = useState()

    const { nickName, avatar, email, walletAddress } = registerInfo || {}
    const [validationMessage, setValidationMessage] = useState({})
    const {
        nickNameValidationMessage,
        emailValidationMessage,
        avatarValidationMessage,
        walletAddressValidationMessage
    } = validationMessage

    const dispatch = useDispatch()
    const isEditing = editModalInfo && editModalInfo.isNewUser === false

    const [
        {
            isLoading: isProfileUploadLoading,
            response: { isSuccess: isProfileUploadSuccess, data: { path: filePath = "" } = {} } = {}
        },
        getProfileUpload
    ] = useFetchAPI()

    const [
        {
            isLoading: isRegisterLoading,
            response: { isSuccess: isRegisterSuccess, data: registerData, message: registerMessage } = {}
        },
        postRegister
    ] = useFetchAPI()

    useEffect(() => {
        if (editModalInfo) {
            setRegisterInfo(editModalInfo)
            const { nickName, avatar, walletAddress, userId, signature } = editModalInfo
            setUpdatedData({ nickName, avatar, walletAddress, userId, signature })
        }
    }, [editModalInfo])

    useEffect(() => {
        if(isVisible) {
            (async () => {
                const walletAddress = await getAccount()
    
                handleOnChange({ walletAddress })
            })()
        }
    }, [isVisible])

    useEffect(() => {
        if (isProfileUploadLoading === false) {
            if (isProfileUploadSuccess && filePath) {
                handleOnChange({ avatar: filePath })
            }
        }
    }, [isProfileUploadLoading, isProfileUploadSuccess, filePath])

    useEffect(() => {
        if (isRegisterLoading === false) {
            if (isRegisterSuccess && registerData) {
                // console.log('registerData===============', registerData)
                showToastMessage(registerMessage, 'success')
                if (isEditing) {
                    dispatch({ type: authAction.SET_WEB_USER_INFO, payload: { ...editModalInfo, ...updatedData } })
                } else {
                    dispatch({ type: authAction.SET_WEB_USER_INFO, payload: registerData })
                }
                onClickClose()
                refreshPage()
            }
        }
    }, [isRegisterLoading, isRegisterSuccess, registerData, registerMessage])

    const handleOnChange = info => {
        if (isEditing) {
            setUpdatedData({ ...updatedData, ...info })
        }
        setRegisterInfo({ ...registerInfo, ...info })
    }

    const handleOnSelectFile = ({ file }) => {
        getProfileUpload({
            api: postUploadProfilePicAPI,
            payload: {
                body: {
                    file
                }
            }
        })
    }

    const validation = () => {
        let status = true
        const validationMessage = {}
        if (!nickName) {
            validationMessage.nickNameValidationMessage = 'Nick name required'
            status = false
        } else {
            validationMessage.nickNameValidationMessage = undefined
        }

        if (!email && !isEditing) {
            validationMessage.emailValidationMessage = 'Email required'
            status = false
        } else {
            validationMessage.emailValidationMessage = undefined
        }

        if (email && !isValidEmailAddress(email)) {
            validationMessage.emailValidationMessage = 'Invalid email format'
            status = false
        } else {
            validationMessage.emailValidationMessage = undefined
        }

        if (!avatar) {
            validationMessage.avatarValidationMessage = 'File required'
            status = false
        } else {
            validationMessage.avatarValidationMessage = undefined
        }

        if (!walletAddress) {
            validationMessage.walletAddressValidationMessage = 'Wallet address required'
            status = false
        } else {
            validationMessage.walletAddressValidationMessage = undefined
        }

        setValidationMessage(validationMessage)
        return status
    }

    const onClickRegister = () => {
        if (validation()) {
            if (isEditing) {
                console.log('updatedData===========', updatedData)
                postRegister({
                    api: postUpdateProfileAPI,
                    payload: {
                        body: {
                            ...updatedData
                        }
                    }
                })
            } else {
                (async () => {
                    const signature = await signMsg(walletAddress)
                    
                    if (signature) {
                        postRegister({
                            api: postRegistrationAPI,
                            payload: {
                                body: {
                                    ...registerInfo,
                                    signature
                                }
                            }
                        })
                    }
                })()
            }
        }
    }

    return (
        <div className='rmodal'>
            <Modal isOpen={isVisible} contentLabel='Example Modal'>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3>Welcome</h3>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={onClickClose}>
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group text-center">
                                <FileDropSection selectedFile={handleOnSelectFile}>
                                    <label className="label-with-input-file-hidden">
                                        <span className="ui-avatar size-80 cp">
                                            <Avatar uri={avatar} />
                                        </span>
                                        <div className="tac mt-1">
                                            <span className="cp small">Choose Profile Picture</span>
                                        </div>
                                    </label>
                                </FileDropSection>
                                <ValidationTextComponent validationMessage={avatarValidationMessage} />
                            </div>
                            <div className="form-group">
                                <label for="Nickname">Nickname</label>
                                <input type="text" className="form-control-form" placeholder="Nickname" value={nickName} onChange={e => handleOnChange({ nickName: e.target.value })} />
                                <ValidationTextComponent validationMessage={nickNameValidationMessage} />
                            </div>
                            {!isEditing ? (
                                <>
                                <div className="form-group">
                                    <label for="Email">Email</label>
                                    <input type="email" className="form-control-form" placeholder="Email" value={email} onChange={e => handleOnChange({ email: e.target.value })} />
                                    <ValidationTextComponent validationMessage={emailValidationMessage} />
                                </div>
                                <div className="form-group">
                                    <label for="wallet_address">Wallet Address</label>
                                    <input type="text" className="form-control-form" placeholder="Wallet Address" value={walletAddress} disabled />
                                    <ValidationTextComponent validationMessage={walletAddressValidationMessage} />
                                </div>
                                </>
                            ) : null}
                            <div class="text-center">
                                <Button className="bg-primary site-btn" isLoading={isRegisterLoading} label={isEditing ? "Update" : "Register"} onClick={onClickRegister} />
                            </div>  
                        </div>  
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default Register