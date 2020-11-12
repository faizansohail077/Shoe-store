import React, { useContext } from 'react'
import './Productindex.css'
import { Link } from 'react-router-dom';
import { shoes } from './Global/Globalstate'
import { Button } from '@material-ui/core';

function ProductIndex() {
    return (
        <div className="cards-container">
            <>
                {Object.entries(shoes).map(([productID, { name, img, price }]) => (
                    <div key={productID}>
                        <div className="img1">
                            <div className='image'>
                                <Link to={productID} style={{ textDecoration: 'none', color: 'black' }}>
                                    <h2 className='title'>{name}</h2>
                                    <img className='img' src={img} alt={name} />
                                    <div className='head'>
                                        <h1 className='price'>{price}</h1>
                                        <Button>add</Button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </>
        </div>
    )
}

export default ProductIndex
