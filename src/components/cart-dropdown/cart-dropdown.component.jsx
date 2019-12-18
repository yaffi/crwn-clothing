import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custombutton/custombutton-component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss'

const CartDropdown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} {...cartItem}/>
                ))
            }
        </div>
        <CustomButton> CHECK OUT </CustomButton>
    </div>
)

const mapStateToProps = ({ cart: {cartItems}}) => ({
    cartItems
})

export default connect(mapStateToProps)(CartDropdown);