import { Button } from '@material-ui/core';
import React, { useContext } from 'react'
import { GlobalContext } from './Global/Globalstate'

function Checkout() {
    const context = useContext(GlobalContext)
    let shoes = context.state.cart;
    const { removeToCart } = context;
    const handleRemove = (id) => {
        let newShoes = shoes;
        delete newShoes[id];
        removeToCart(newShoes)
    }
    return (
        <div>
            <h1> checkout page</h1>
            {Object.entries(shoes).map(([productID, { name, img, price }]) => (
                <div key={productID}>
                    <div className="img1">
                        <div className='image'>
                            <h2 className='title'>{name}</h2>
                            <img className='img' src={img} alt={name} />
                            <div className='head'>
                                <h1 className='price'>{price}</h1>
                                <Button onClick={() => handleRemove(productID)}>Remove</Button>
                            </div>

                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Checkout
