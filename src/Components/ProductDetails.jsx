import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import './ProductDetails.css'
import { GlobalContext, shoes } from './Global/Globalstate'
import { Button } from '@material-ui/core'



function ProductDetails() {
    const context = useContext(GlobalContext)
    const { state, addToCart } = context;
    const { id } = useParams()
    const product = shoes[id]
    const { name, img, price } = product
    const handleAdd = () => {
        var newCart = state.cart;
        newCart[id] = { name, img, price };
        addToCart(newCart)
    }
    console.log(state.cart)
    return (
        <div className='details'>
            <h2>ProductDetails</h2>
            <div className="image">
                <h2 className='title'>{name}</h2>
                <h1 className='price'>${price}</h1>
                <img className='img' src={img} alt='' />
            </div>
            <Link to='checkout'>
                <Button onClick={() => handleAdd()} color='primary' className='btn' >Add to Cart</Button>
            </Link>
            <div className='text'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit sapiente ut aut, soluta culpa delectus officiis facere aspernatur, magnam nostrum ullam labore quia tempore nemo, enim voluptas dignissimos consectetur asperiores adipisci provident quaerat amet possimus. Maiores reiciendis quam, temporibus esse reprehenderit quibusdam molestias necessitatibus, quasi vel eaque explicabo alias enim!
            </div>

        </div>
    )
}

export default ProductDetails
