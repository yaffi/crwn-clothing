import React from 'react';

import CustomButton from '../custombutton/custombutton-component';

import './cart-dropdown.styles.scss'

const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items' />
        <CustomButton> CHECK OUT </CustomButton>
    </div>
)

export default CartDropdown;