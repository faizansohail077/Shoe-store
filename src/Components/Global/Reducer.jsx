
const  reducer = (state, action) => {
    switch (action.type) {
        case "ADD_PRODUCT":
            return {
                ...state,
                cart: { ...state.cart, ...action.payload }
            }
        case "REMOVE_PRODUCT":
            return {
                ...state,
                cart: { ...state.cart, ...action.payload }
            }
        default:
            return state
    }
}
export default reducer