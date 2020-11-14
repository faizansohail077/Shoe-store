import React,{useContext} from 'react'
import './Header.css'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { GlobalContext } from './Global/Globalstate';
function Header() {
    const context = useContext(GlobalContext)
    let cartItems = Object.keys(context.state.cart).length
    return (
        <div className="header">
            <div className="header__left">
                <Link to='/'>
                    <img className='header__logo' src={'http://pngimg.com/uploads/adidas/adidas_PNG21.png'} alt='' />
                </Link>
            </div>
            <div className="header__right">
                <Link to='/'>
                    <nav>Home</nav>
                </Link>
                <Link to='products'>
                    <nav>Products</nav>
                </Link>
                <Link to="checkout">
                    <ShoppingCartIcon className='icon' />
                </Link>
                {cartItems}
            </div>


        </div>
    )
}

export default Header
