import React from 'react'
import { useHistory } from 'react-router-dom'

import * as fixedData from '../../../helper/settings'
import { Avatar } from '../../../commonPages'

const {
    web: { webProductDetailRoute }
} = fixedData.routeName

function Product(props) {
    const { item } = props
    const { nftID, nftName, imageOrVideo, shortDescription, startingPrice, lastBidPrice } = item || {}

    const history = useHistory()

    const onClickProduct = () => history.push({ pathname: `${webProductDetailRoute.path}/${nftID}` })

    return (
        <div className="col-lg-5 col-md-5 col-sm-6 mx-auto">
            <div className="product__item text-center">
                <div className="product__item__pic set-bg" role="button" onClick={onClickProduct}>
                    <Avatar uri={imageOrVideo} />
                </div>
                <div className="product__item__text">
                    <h4 className="font-weight-bold"><a role="button" className="text-black" onClick={onClickProduct}>{nftName}</a></h4>

                    <p className="text-ellispis"> {shortDescription}</p>
                    <div className="product__price">{lastBidPrice || startingPrice}</div>
                </div>
                <button type="submit" className="mt-3 site-btn" onClick={onClickProduct}>Buy</button>
            </div>
        </div>
    )
}

export default Product