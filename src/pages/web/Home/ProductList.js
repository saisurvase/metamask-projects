import React from 'react'

import Product from './Product'

function ProductList(props) {
    const { products } = props

    let productListSection = null
    if (products && products.length) {
        const list = products.map(item => {
            return <Product item={item} />
        })

        productListSection = list
    }
    
    return (
        <div className="row property__gallery">
            {productListSection}
        </div>
    )
}

export default ProductList