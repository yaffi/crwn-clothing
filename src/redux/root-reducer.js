import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

export default combineReducers({
    cart: cartReducer,
    user: userReducer,
    directory: directoryReducer,
    shop: shopReducer
});