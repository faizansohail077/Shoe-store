import React from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'
import './Product.css'
function Product() {
    return (
        <div>
            Product
            <hr />
            <Outlet/>
          
        </div>
    )
}

export default Product
