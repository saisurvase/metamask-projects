import React, { useEffect, useState } from 'react'

import { useFetchAPI } from '../../../hooks'
import { getNftDetailsAPI, getPriceEthUsd } from '../../../http/common.http.service'
import { Avatar, HTMLParser, ValidationTextComponent } from '../../../commonPages'
import Login from '../Auth/Login'
import Register from '../Auth/Register'
import { Loader } from '../commonUI'
import BidForm from './BidForm'

function ProductDetail(props) {
    const { match: { params: { nftId } } = {} } = props
    const [nftDetail, setNftDetail] = useState(undefined)
    const [usdValue, setUsdValue] = useState()
    const [isVisibleInfo, setIsVisibleInfo] = useState({ isLoginVisible: false, isRegisterVisible: false })

    const [
        {
            isLoading: isNftDetailLoading,
            response: { isSuccess: isNftDetailSuccess, data: detailData }
        },
        getNftDetail
    ] = useFetchAPI()

    const [
        {
            isLoading: isUsdValueLoading,
            response: usdValueReponse
        },
        getUsdValue
    ] = useFetchAPI()

    useEffect(() => {
        if (isUsdValueLoading === false) {
            if (usdValueReponse) {
                const { binancecoin: { usd } = {} } = usdValueReponse
                setUsdValue(usd)
            }
        }
    }, [isUsdValueLoading, usdValueReponse])

    useEffect(() => {
        if (nftId) {
            getNftDetail({
                api: getNftDetailsAPI,
                payload: {
                    params: { nftId }
                }
            })

            getUsdValue({
                api: getPriceEthUsd,
                payload: {
                    params: {
                        ids: 'binancecoin',
                        vs_currencies: 'USD'
                    }
                }
            })
        }
    }, [nftId])

    useEffect(() => {
        if (isNftDetailLoading === false) {
            if (isNftDetailSuccess && detailData) {
                setNftDetail(detailData)
            } else {
                setNftDetail(undefined)
            }
        }
    }, [isNftDetailLoading, isNftDetailSuccess, detailData])

    const handleBidFormSuccess = price => setNftDetail({ ...nftDetail, lastBidPrice: price })

    const onClickClose = () => setIsVisibleInfo({ isLoginVisible: false, isRegisterVisible: false })
    const onClickLogin = () => setIsVisibleInfo({ isLoginVisible: true, isRegisterVisible: false })
    const onClickRegister = () => setIsVisibleInfo({ isLoginVisible: false, isRegisterVisible: true })

    const propertiesSection = properties => {
        const filteredProperties = properties && properties.length && properties.filter(item => (item.Key !== "" && item.Value !== ""))
        let data = null
        if (filteredProperties && filteredProperties.length) {
            data = filteredProperties.map(item => {
                return (
                    <div className="col col-md-4 col-lg-4 mb-3">
                        <div className=" bg-lighten p-3 border border-info rounded text-center">
                            <div className="small font-weight-bold">
                                {item.Key}
                            </div>
                            <p className="mb-0 small">{item.Value}</p>
                        </div>
                    </div>
                )
            })
        }
        return data
    }

    let detailSection = null
    if (nftDetail) {
        console.log('nftDetail================', nftDetail)
        const { imageOrVideo,
            nftName,
            description,
            properties,
            transactionHash,
            nftID,
            lastBidPrice,
            startingPrice,
            bids,
            shortDescription,
            physcicalArtworkIsAvailable,
            additionalPrice
        } = nftDetail

        let bidsSection = null
        if (bids && bids.length) {
            bidsSection = bids.map(item => {
                const { price, nickName } = item
                const doller = usdValue && price * usdValue
                const dollerValue = doller && doller.toFixed(2)
                return (
                    <tr>
                        <td>
                            <span className="circle_img">
                                <Avatar uri="https://cryptologos.cc/logos/binance-coin-bnb-logo.png" />
                            </span>
                            <strong>{price}</strong>
                        </td>
                        <td>${dollerValue}</td>
                        <td>{nickName}</td>
                    </tr>
                )
            })
        } else {
            bidsSection = (
                <tr>
                    <td colSpan="4">
                        <ValidationTextComponent validationMessage="No bids placed yet..." />
                    </td>
                </tr>
            )
        }

        detailSection = (
            <section className="product-details spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="product__details__pic mb-4 main_box">
                                <Avatar uri={imageOrVideo} />
                            </div>

                            <div className="d-none d-md-block categories__accordion">
                                <div className="accordion" id="accordionExample">
                                    <div className="card">
                                        <div className="card-heading">
                                            <a data-toggle="collapse" data-target="#collapseFour">Description</a>
                                        </div>
                                        <div id="collapseFour" className="collapse" data-parent="#accordionExample">
                                            <div className="card-body">
                                                <div className="bg-light p-4 panel_container">
                                                    <HTMLParser htmlContent={description} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card">
                                        <div className="card-heading">
                                            <a data-toggle="collapse" data-target="#collapseSix">Properties</a>
                                        </div>
                                        <div id="collapseSix" className="collapse" data-parent="#accordionExample">
                                            <div className="card-body">
                                                <div className="bg-light p-4">
                                                    <div className="row">
                                                        {propertiesSection(JSON.parse(properties))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card">
                                        <div className="card-heading">
                                            <a data-toggle="collapse" data-target="#collapseFive">Details</a>
                                        </div>
                                        <div id="collapseFive" className="collapse" data-parent="#accordionExample">
                                            <div className="card-body">
                                                <div className="bg-light p-4">
                                                    <div className="ChainInfo--label">
                                                        <div className="ChainInfo--label-type">Contract Address</div>
                                                        <div className="ChainInfo--label-value"><a className="text-primary"
                                                            href="https://etherscan.io/address/0x495f947276749ce646f68ac8c248420045cb7b5e"
                                                            rel="" target="_blank">{transactionHash}</a></div>
                                                    </div>
                                                    <div className="ChainInfo--label">
                                                        <div className="ChainInfo--label-type">Physical art work</div>
                                                        <div className="ChainInfo--label-value">{physcicalArtworkIsAvailable ? "Yes" : "No"}</div>
                                                    </div>
                                                    {physcicalArtworkIsAvailable ? (
                                                        <div className="ChainInfo--label">
                                                            <div className="ChainInfo--label-type">Additional Price</div>
                                                            <div className="ChainInfo--label-value">{additionalPrice}</div>
                                                        </div>
                                                    ) : null}
                                                    <div className="ChainInfo--label">
                                                        <div className="ChainInfo--label-type">Token ID</div>
                                                        <div className="ChainInfo--label-value">{nftID}</div>
                                                    </div>
                                                    <div className="ChainInfo--label">
                                                        <div className="ChainInfo--label-type">Blockchain</div>
                                                        <div className="ChainInfo--label-value">Ethereum</div>
                                                    </div>
                                                    <div className="ChainInfo--label">
                                                        <div className="ChainInfo--label-type">Metadata</div>
                                                        <div className="ChainInfo--label-value">Centralized</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="product__details__text">
                                <h3>{nftName}</h3>
                                <div className="product__details__button">
                                    <ul>
                                        <li><a className="mr-2" href="#"><span className="icon_heart_alt"></span></a>14</li>
                                    </ul>
                                </div>

                                <div className="product__details__price mb-2">
                                    <li>
                                        <span className="circle_img">
                                            <Avatar uri="https://cryptologos.cc/logos/binance-coin-bnb-logo.png" className="eth_big img-fluid" />
                                        </span>
                                        {lastBidPrice || startingPrice}
                                    </li>
                                </div>
                                <BidForm detailInfo={nftDetail} bidFormSuccess={handleBidFormSuccess} onRequestLogin={onClickLogin} onRequestRegister={onClickRegister} />
                                <p>{shortDescription}</p>

                                <div className="product__details__widget">

                                <div className="categories__accordion d-block d-md-none">
                                <div className="accordion" id="accordionExample">
                                    <div className="card">
                                        <div className="card-heading">
                                            <a data-toggle="collapse" data-target="#collapseFour">Description</a>
                                        </div>
                                        <div id="collapseFour" className="collapse" data-parent="#accordionExample">
                                            <div className="card-body">
                                                <div className="bg-light p-4 panel_container">
                                                    <HTMLParser htmlContent={description} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card">
                                        <div className="card-heading">
                                            <a data-toggle="collapse" data-target="#collapseSix">Properties</a>
                                        </div>
                                        <div id="collapseSix" className="collapse" data-parent="#accordionExample">
                                            <div className="card-body">
                                                <div className="bg-light p-4">
                                                    <div className="row">
                                                        {propertiesSection(JSON.parse(properties))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card">
                                        <div className="card-heading">
                                            <a data-toggle="collapse" data-target="#collapseFive">Details</a>
                                        </div>
                                        <div id="collapseFive" className="collapse" data-parent="#accordionExample">
                                            <div className="card-body">
                                                <div className="bg-light p-4">
                                                    <div className="ChainInfo--label">
                                                        <div className="ChainInfo--label-type">Contract Address</div>
                                                        <div className="ChainInfo--label-value"><a className="text-primary"
                                                            href="https://etherscan.io/address/0x495f947276749ce646f68ac8c248420045cb7b5e"
                                                            rel="" target="_blank">{transactionHash}</a></div>
                                                    </div>
                                                    <div className="ChainInfo--label">
                                                        <div className="ChainInfo--label-type">Physical art work</div>
                                                        <div className="ChainInfo--label-value">{physcicalArtworkIsAvailable ? "Yes" : "No"}</div>
                                                    </div>
                                                    {physcicalArtworkIsAvailable ? (
                                                        <div className="ChainInfo--label">
                                                            <div className="ChainInfo--label-type">Additional Price</div>
                                                            <div className="ChainInfo--label-value">{additionalPrice}</div>
                                                        </div>
                                                    ) : null}
                                                    <div className="ChainInfo--label">
                                                        <div className="ChainInfo--label-type">Token ID</div>
                                                        <div className="ChainInfo--label-value"><button className="token_id"
                                                            type="button">{nftID}</button></div>
                                                    </div>
                                                    <div className="ChainInfo--label">
                                                        <div className="ChainInfo--label-type">Blockchain</div>
                                                        <div className="ChainInfo--label-value">Ethereum</div>
                                                    </div>
                                                    <div className="ChainInfo--label">
                                                        <div className="ChainInfo--label-type">Metadata</div>
                                                        <div className="ChainInfo--label-value">Centralized</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                                    <div className="categories__accordion">
                                        <div className="accordion" id="accordionExample">
                                            <div className="card">
                                                <div className="card-heading">
                                                    <a data-toggle="collapse" data-target="#collapseOne">Price History</a>
                                                </div>
                                                <div id="collapseOne" className="collapse" data-parent="#accordionExample">
                                                    <div className="card-body">
                                                        <div className="bg-light p-4">
                                                            <div className="d-flex">

                                                                <div className="PriceHistoryStats--stat">
                                                                    <div>All Time Avg. Price</div>
                                                                    <div className="product__details__price mb-0">Ξ11.692</div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <svg className="recharts-surface" width="100%" height="130"
                                                                    viewBox="0 0 668 130" version="1.1">
                                                                    <defs>
                                                                        <clipPath id="recharts3-clip">
                                                                            <rect x="53" y="5" height="95" width="600"></rect>
                                                                        </clipPath>
                                                                    </defs>
                                                                    <g className="recharts-cartesian-grid">
                                                                        <g className="recharts-cartesian-grid-horizontal">
                                                                            <line stroke="#E5E8EB" fill="none" x="53" y="5"
                                                                                width="600" height="95" x1="53" y1="100"
                                                                                x2="653" y2="100"></line>
                                                                            <line stroke="#E5E8EB" fill="none" x="53" y="5"
                                                                                width="600" height="95" x1="53"
                                                                                y1="71.66666666666667" x2="653"
                                                                                y2="71.66666666666667"></line>
                                                                            <line stroke="#E5E8EB" fill="none" x="53" y="5"
                                                                                width="600" height="95" x1="53"
                                                                                y1="43.333333333333336" x2="653"
                                                                                y2="43.333333333333336"></line>
                                                                            <line stroke="#E5E8EB" fill="none" x="53" y="5"
                                                                                width="600" height="95" x1="53" y1="15" x2="653"
                                                                                y2="15"></line>
                                                                            <line stroke="#E5E8EB" fill="none" x="53" y="5"
                                                                                width="600" height="95" x1="53" y1="5" x2="653"
                                                                                y2="5"></line>
                                                                        </g>
                                                                    </g>
                                                                    <g
                                                                        className="recharts-layer recharts-cartesian-axis recharts-xAxis xAxis">
                                                                        <line className="recharts-cartesian-axis-line"
                                                                            stroke="#E5E8EB" width="600" height="30" x="53"
                                                                            y="100" fill="none" x1="53" y1="100" x2="653"
                                                                            y2="100"></line>
                                                                        <g className="recharts-cartesian-axis-ticks">
                                                                            <g
                                                                                className="recharts-layer recharts-cartesian-axis-tick">
                                                                                <line className="recharts-cartesian-axis-tick-line"
                                                                                    stroke="#E5E8EB" width="600" height="30"
                                                                                    x="53" y="100" fill="none" x1="353" y1="110"
                                                                                    x2="353" y2="100"></line><text stroke="none"
                                                                                        width="600" height="30" x="353" y="116"
                                                                                        fill="#353840" fill-opacity="0.6"
                                                                                        className="recharts-text recharts-cartesian-axis-tick-value"
                                                                                        text-anchor="middle">
                                                                                    <tspan x="353" dy="0.71em">6/20</tspan>
                                                                                </text>
                                                                            </g>
                                                                        </g>
                                                                    </g>
                                                                    <g
                                                                        className="recharts-layer recharts-cartesian-axis recharts-yAxis yAxis">
                                                                        <line className="recharts-cartesian-axis-line"
                                                                            stroke="#E5E8EB" width="53" height="95" x="0" y="5"
                                                                            fill="none" x1="53" y1="5" x2="53" y2="100"></line>
                                                                        <g className="recharts-cartesian-axis-ticks">
                                                                            <g
                                                                                className="recharts-layer recharts-cartesian-axis-tick">
                                                                                <line className="recharts-cartesian-axis-tick-line"
                                                                                    stroke="#E5E8EB" width="53" height="95"
                                                                                    x="0" y="5" fill="none" x1="43" y1="100"
                                                                                    x2="53" y2="100"></line><text stroke="none"
                                                                                        width="53" height="95" x="25" y="100"
                                                                                        fill="#353840" fill-opacity="0.6"
                                                                                        className="recharts-text recharts-cartesian-axis-tick-value"
                                                                                        text-anchor="end">
                                                                                    <tspan x="25" dy="0.355em">0</tspan>
                                                                                </text>
                                                                            </g>
                                                                            <g
                                                                                className="recharts-layer recharts-cartesian-axis-tick">
                                                                                <line className="recharts-cartesian-axis-tick-line"
                                                                                    stroke="#E5E8EB" width="53" height="95"
                                                                                    x="0" y="5" fill="none" x1="43"
                                                                                    y1="71.66666666666667" x2="53"
                                                                                    y2="71.66666666666667"></line><text
                                                                                        stroke="none" width="53" height="95" x="25"
                                                                                        y="71.66666666666667" fill="#353840"
                                                                                        fill-opacity="0.6"
                                                                                        className="recharts-text recharts-cartesian-axis-tick-value"
                                                                                        text-anchor="end">
                                                                                    <tspan x="25" dy="0.355em">10</tspan>
                                                                                </text>
                                                                            </g>
                                                                            <g
                                                                                className="recharts-layer recharts-cartesian-axis-tick">
                                                                                <line className="recharts-cartesian-axis-tick-line"
                                                                                    stroke="#E5E8EB" width="53" height="95"
                                                                                    x="0" y="5" fill="none" x1="43"
                                                                                    y1="43.333333333333336" x2="53"
                                                                                    y2="43.333333333333336"></line><text
                                                                                        stroke="none" width="53" height="95" x="25"
                                                                                        y="43.333333333333336" fill="#353840"
                                                                                        fill-opacity="0.6"
                                                                                        className="recharts-text recharts-cartesian-axis-tick-value"
                                                                                        text-anchor="end">
                                                                                    <tspan x="25" dy="0.355em">20</tspan>
                                                                                </text>
                                                                            </g>
                                                                            <g
                                                                                className="recharts-layer recharts-cartesian-axis-tick">
                                                                                <line className="recharts-cartesian-axis-tick-line"
                                                                                    stroke="#E5E8EB" width="53" height="95"
                                                                                    x="0" y="5" fill="none" x1="43" y1="15"
                                                                                    x2="53" y2="15"></line><text stroke="none"
                                                                                        width="53" height="95" x="25" y="15"
                                                                                        fill="#353840" fill-opacity="0.6"
                                                                                        className="recharts-text recharts-cartesian-axis-tick-value"
                                                                                        text-anchor="end">
                                                                                    <tspan x="25" dy="0.355em">30</tspan>
                                                                                </text>
                                                                            </g>
                                                                        </g>
                                                                    </g>
                                                                    <g
                                                                        className="recharts-layer recharts-cartesian-axis recharts-yAxis yAxis">
                                                                        <g className="recharts-cartesian-axis-ticks"></g>
                                                                    </g>
                                                                    <g className="recharts-layer recharts-bar">
                                                                        <g className="recharts-layer recharts-bar-rectangles">
                                                                            <g className="recharts-layer recharts-bar-rectangle">
                                                                                <path fill="#bfdcf6" width="5"
                                                                                    height="53.58839062500001" x="351"
                                                                                    y="46.41160937499999" radius="0"
                                                                                    className="recharts-rectangle"
                                                                                    d="M 351,46.41160937499999 h 5 v 53.58839062500001 h -5 Z">
                                                                                </path>
                                                                            </g>
                                                                        </g>
                                                                    </g>
                                                                    <g className="recharts-layer recharts-line">
                                                                        <g className="recharts-layer recharts-line-dots">
                                                                            <circle r="3" stroke="#3291E9" stroke-width="3"
                                                                                fill="#fff" width="600" height="95"
                                                                                className="recharts-dot recharts-line-dot" cx="353"
                                                                                cy="66.87263125"></circle>
                                                                        </g>
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="card">
                                                <div className="card-heading">
                                                    <a data-toggle="collapse" data-target="#collapseThree">Offers</a>
                                                </div>
                                                <div id="collapseThree" className="collapse" data-parent="#accordionExample">
                                                    <div className="card-body">
                                                        <div className="table-responsive">
                                                            <table className="table">
                                                                <thead>
                                                                    <tr>
                                                                        <th scope="col">Price</th>
                                                                        <th scope="col">USD Price</th>
                                                                        <th scope="col">From</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {bidsSection}
                                                                </tbody>
                                                                {/* <tfoot>
                                                                    <tr>
                                                                        <td colspan="4">
                                                                            <button type="button"
                                                                                className="btn btn-outline-danger">Make
                                                                                Offer</button>
                                                                        </td>
                                                                    </tr>
                                                                </tfoot> */}
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <body>
            {/* Pre loader */}
            {isNftDetailLoading ? <Loader /> : null}
            {detailSection}
            {/* Register */}
            <Register isVisible={isVisibleInfo.isRegisterVisible} onClickClose={onClickClose} />
            {/* Login */}
            <Login isVisible={isVisibleInfo.isLoginVisible} onClickClose={onClickClose} />
        </body>
    )
}

export default ProductDetail