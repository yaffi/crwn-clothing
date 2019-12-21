import cartActionTypes from './cart.types';
import { addItemToCart, removeItemToCart } from './cart.utils';

const INITIAL_STATE = {
    cartItems: [],
    hidden: true,
}

const cartReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case cartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case cartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case cartActionTypes.CLEAR_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }
        case cartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemToCart(state.cartItems, action.payload)
            }
        default:
            return state
    }
}

export default cartReducer;