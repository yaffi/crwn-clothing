import React from 'react';

import {connect} from 'react-redux';
import { clearItem, addItem ,removeItem} from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem, selectCartItemsTotal, clearItem, addItem, removeItem}) => {

    const { imageUrl, name, quantity, price} = cartItem;

    return(
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt="item" />
            </div>
            <span className='name'>{name}</span>
            <div className='quantity'>
                <span className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</span>
                <span className='value'>{quantity}</span>
                <span className='arrow' onClick={() => addItem(cartItem)}>&#10095;</span>
            </div>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => clearItem(cartItem)}>
                &#10005;
            </div>
        </div>
    );
    
};

const mapDispatchToProps = dispatch => ({
    clearItem: cartItem => dispatch(clearItem(cartItem)),
    addItem: cartItem => dispatch(addItem(cartItem)),
    removeItem: cartItem => dispatch(removeItem(cartItem))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);