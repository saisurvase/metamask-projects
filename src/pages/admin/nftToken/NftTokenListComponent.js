import React, { useState } from 'react'

import NftTokenListCell from './NftTokenListCell'

const getTitleTag = type => {
    let tag = ''
    switch(type) {
        case 'sold':
            tag = 'Sold'
            break
        case 'active':
            tag = 'Active'
            break
        case 'comingSoon':
            tag = 'Coming Soon'
            break
        default:
            tag = 'Sold'
    }

    return tag
}

function NftTokenListComponent(props) {
    const { list = [], type, onClickAction } = props;
    const [nftId, setNftId] = useState(undefined)
    const [nftName, setNftname] = useState(undefined)
    const [elias, setElias] = useState({})


    const handleOnChange =(e)=>{

    }


    // console.log('list is here ==================', list)
    // console.log('list is here ==================', list)
    let listSection = null
    if (list && list.length) {
        // console.log('list is here ==================', list)
        listSection = (
            <table className="table table-responsive-lg mb-0 table-striped">
                <thead>
                    <tr>
                        <th>File</th>
                        <th>Name</th>
                        <th>NFT Id</th>
                        <th>Aucation Start Time</th>
                        <th>Status</th>
                        <th>Starting price</th>
                        <th>Reserve price</th>
                        <th>Start Auction</th>
                        <th></th>
                    </tr>
                </thead>
           
                <tbody>
                    {list.map(item => {
                        return <NftTokenListCell item={item} onClickAction={onClickAction} />
                    })}
                </tbody>
            </table>
        )
    } else {
        listSection = <p className='text-center text-danger'>No data found!</p>
    }

    return (
        <div className="content-body">
            <div className="container-fluid">
                <label className="title-container">{getTitleTag(type)} NFT token list</label>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <h6>NFT Id</h6>
                                        <input type="text" className="form-control" placeholder="Search with NFT id" 
                                        value={nftName} 
                                        onChange={e => handleOnChange({ nftName: e.target.value })}                                         />

                                    </div>

                                    <div className="col-lg-6">
                                        <h6>NFT Name</h6>

                                        <input type="text" className="form-control" placeholder="Search with NFT name"
                                        value={nftName} 
                                        onChange={handleOnChange} />

                                        {/* {e => handleOnChange({ nftName: e.target.value })} */}
                                    </div>
                                </div>
                                <hr />
                                <div className="table-responsive">
                                    {listSection}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NftTokenListComponent