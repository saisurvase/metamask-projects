import React, { useEffect, useState } from 'react'

import { useFetchAPI } from '../../../hooks'
import { getNftTokenListAllAPI } from '../../../http/common.http.service'
import { Loader, OffCanvasMenu } from '../commonUI'
import Category from './Category'
import ProductSection from './ProductSection'
import DiscountSection from './DiscountSection'
import TrendSection from './TrendSectoin'
import ServiceSection from './ServiceSection'

function Home() {
    const [productList, setProductList] = useState([])
    
    const [
        {
            isLoading: isListLoading,
            response: { isSuccess: isListSuccess, data }
        },
        getList
    ] = useFetchAPI()

    useEffect(() => {
        getList({
            api: getNftTokenListAllAPI,
            payload: {}
        })
    }, [])

    useEffect(() => {
        if (isListLoading === false) {
            if (isListSuccess && data && data.length) {
                setProductList(data)
            }
        }
    }, [isListLoading, isListSuccess, data])

    return (
        <body>
            {/*  Page Preloder  */}
            {isListLoading ? <Loader /> : null}

            {/*  Offcanvas Menu */}
            <OffCanvasMenu />

            {/*  Categories Section  */}
            <Category />

            {/*  Product Section */}
            <ProductSection titleLabel="New Listed" products={productList} />

            {/*  Discount Section */}
            <DiscountSection />

            {/*  Trend Section */}
            <TrendSection />

            {/*  Services Section */}
            <ServiceSection />
        </body>
    )
}

export default Home