import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { useFetchAPI } from '../../../hooks'
import { checkAuth, showToastMessage, refreshPage } from '../../../helper/utility'
import { postPlaceBidAPI } from '../../../http/common.http.service'
import { getTransHashByPlaceBid } from '../../../web3Integration/global.service'

function BidForm(props) {
    const { detailInfo, authData, bidFormSuccess, onRequestLogin, onRequestRegister } = props
    const { nftID, lastBidPrice, startingPrice, step } = detailInfo
    const { userId, walletAddress } = authData || {}
    const [formInfo, setFormInfo] = useState({ dateTime: new Date(), userId, walletAddress, nftID, price: (lastBidPrice || startingPrice) })

    const [
        {
            isLoading: isPlaceBidLoading,
            response: { isSuccess: isPlaceBidSuccess, data: placeBidData, message }
        },
        placeBid
    ] = useFetchAPI()

    useEffect(() => {
        if (isPlaceBidLoading === false) {
            if (isPlaceBidSuccess && placeBidData) {
                bidFormSuccess(formInfo.price)
                showToastMessage(message, 'success')
                // refreshPage()
            } else {
                showToastMessage(message)
            }
        }
    }, [isPlaceBidLoading, isPlaceBidSuccess, placeBidData])

    const onClickMinus = () => {
        const tempPrice = formInfo.price - step
        if (tempPrice >= lastBidPrice) {
            setFormInfo({ ...formInfo, price: tempPrice })
        }
    }
    const onClickPlus = () => {
        const tempPrice = formInfo.price + step
        setFormInfo({ ...formInfo, price: tempPrice })
    }

    const onClickPlaceBid = () => {
        const { status, isNewUser } = checkAuth(authData)
        if (status) {
            const { status: transHashStatus, transHash } = getTransHashByPlaceBid(nftID, formInfo.price)
            console.log('formInfo================', transHashStatus, transHash, formInfo )
            if (transHashStatus) {
                placeBid({
                    api: postPlaceBidAPI,
                    payload: {
                        body: {
                            ...formInfo,
                            transactionHash: transHash
                        }
                    }
                })
            }
        } else if (!isNewUser) {
            onRequestLogin()
        } else if (isNewUser) {
            onRequestRegister()
        }
    }

    return (
        <div style={{ marginBottom: 15, marginTop: 20 }}>
            <div className="row" style={{ marginLeft: 3, marginBottom: 15 }}>
                <div className="footer__social">
                    <a role="button" onClick={onClickMinus}><i className="fa fa-minus"></i></a>
                </div>
                <div style={priceContainer}>{formInfo.price}</div>
                <div className="footer__social">
                    <a data-toggle="modal" data-target="#at-login" role="button" onClick={onClickPlus}><i className="fa fa-plus"></i></a>
                </div>
            </div>
            <div className="product__details__button mb-0" role="button" onClick={onClickPlaceBid}><a data-toggle="modal" data-target="#at-login" className="cart-btn">Place a bid</a></div>
        </div>
    )
}

const priceContainer = {
    // minWidth: '10px',
    borderRadius: '10%',
    marginLeft: '10px',
    marginRight: '10px',
    paddingLeft: '15px',
    paddingRight: '15px',
    display: 'inline-block',
    height: '40px',
    background: '#e1e1e1',
    fontSize: '15px',
    color: '#111111',
    lineHeight: '40px',
    textAlign: 'center',
    marginBottom:' 5px',
}

const mapStateToProps = state => ({
    authData: state.web.app.auth.authData
})

export default connect(mapStateToProps)(BidForm)