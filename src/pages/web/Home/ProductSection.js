import React from 'react'

import Title from './Title'
import ProductList from './ProductList'

function ProductSection(props) {
    const { titleLabel, products } = props
    return (
        <section className="product spad">
            <div className="container">
                <Title label={titleLabel} />
                <ProductList products={products} />
            </div>
        </section>
    )
}

export default ProductSection