import React from 'react';

import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from 'reselect';

import { selectCartItems } from '../../redux/cart/cart.selectors';

import CustomButton from '../custombutton/custombutton-component';
import CartItem from '../cart-item/cart-item.component';

import {toggleCartHidden} from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.scss'

const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length 
                ?
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} {...cartItem}/>
                ))
                :
                <span className='empty-message'>cart have not item</span>
            }
        </div>
        <CustomButton 
            onClick={() => { 
                history.push(`/checkout`)
                dispatch(toggleCartHidden())
            }}
        >
         CHECK OUT 
        </CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));