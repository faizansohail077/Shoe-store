import React from 'react'
import { Link, useParams } from 'react-router-dom'
import './ProductDetails.css'
import { shoes } from './Global/Globalstate'
function ProductDetails() {

    const { id } = useParams()
    const product = shoes[id]
    const { name, img, price } = product
    return (
        <div>
            ProductDetails
            <div>
                {/* {id} */}
                <h2>{name}</h2>
                <h1>${price}</h1>
                <img src={img} alt='' />
            </div>
        </div>
    )
}

export default ProductDetails
