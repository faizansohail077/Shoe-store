import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { shoes } from './Global/Globalstate'

function ProductIndex() {
    return (
        <div>
            <ul>
                {Object.entries(shoes).map(([productID, { name, img, price }]) => (
                    <li key={productID}>
                        <Link to={productID}>
                            <div>
                                <h2>{name}</h2>
                                <img src={img} alt={name} />
                                <h1>{price}</h1>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductIndex
