import React, { createContext, useReducer } from "react";
import reducer from "./Reducer";

export const shoes = {
    "Shoe-1": {
        name: "VALOUR BLUE",
        img:
            "https://freepngimg.com/thumb/shoes/27428-5-nike-shoes-transparent-background-thumb.png",
        price: 300
    },
    "Shoe-2": {
        name: "JORDAN MARS 270 LONDON",
        img:
            "https://freepngimg.com/thumb/shoes/28530-3-nike-shoes-transparent-thumb.png",
        price: 300
    },
    "Shoe-3": {
        name: "RACER BLUE",
        img:
            "https://freepngimg.com/thumb/shoes/21860-7-red-shoes-thumb.png",
        price: 300
    }, 'Shoe-4': {
        name: 'faizan',
        img: "https://freepngimg.com/thumb/shoes/28084-5-sneaker-transparent-image-thumb.png",
        price: 300


    }, 'Shoe-5': {
        name: 'faizan',
        img: "https://freepngimg.com/thumb/shoes/28116-8-nike-shoes-thumb.png",
        price: 300


    }, 'Shoe-6': {
        name: 'faizan',
        img: "https://freepngimg.com/thumb/shoes/27518-9-nike-shoes-file-thumb.png",
        price: 300


    }, 'Shoe-7': {
        name: 'faizan',
        img: "https://freepngimg.com/thumb/shoes/28411-5-sneaker-clipart-thumb.png",
        price: 300


    }, 'Shoe-8': {
        name: 'faizan',
        img: "https://freepngimg.com/thumb/shoes/26230-6-nike-shoes-clipart-thumb.png",
        price: 300


    }, 'Shoe-9': {
        name: 'faizan',
        img: "https://freepngimg.com/thumb/shoes/28084-5-sneaker-transparent-image-thumb.png",
        price: 300


    }, 'Shoe-10': {
        name: 'faizan',
        img: "https://freepngimg.com/thumb/shoes/28378-2-sneaker-image-thumb.png",
        price: 300


    }, 'Shoe-11': {
        name: 'faizan',
        img: "https://freepngimg.com/thumb/shoes/21849-6-dock-shoes-thumb.png",
        price: 300


    }, 'Shoe-12': {
        name: 'faizan',
        img: "https://freepngimg.com/thumb/shoes/28090-6-sneaker-file-thumb.png",
        price: 300


    }, 'Shoe-13': {
        name: 'faizan',
        img: "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
        price: 300


    }, 'Shoe-14': {
        name: 'faizan',
        img: "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
        price: 300


    }



};

const initialState = {
    shoes,
    cart: []
}


export const GlobalContext = createContext(initialState);


export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const addToCart = (cart) => {

        dispatch({
            type: "ADD_PRODUCT",
            payload: cart
        })

    }
    const removeToCart = (cart) => {

        dispatch({
            type: "REMOVE_PRODUCT",
            payload: cart
        })

    }
    return (
        <GlobalContext.Provider
            value={{
                state,
                addToCart,
                removeToCart
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

