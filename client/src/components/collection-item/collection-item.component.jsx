import React from 'react';

import { connect } from 'react-redux';

import CustomButton from '../custombutton/custombutton-component';

import { addItem } from '../../redux/cart/cart.actions';

import './collection-item.styles.scss';

const CollectionItem = ({item, addItem}) => {

    const { name, imageUrl, price } = item;

    return(
        <div className='collection-item'>
            <div
                className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <CustomButton inverted onClick={() => addItem(item)}> ADD TO CART </CustomButton>
            <div className='collection-footer'>
                <span className='name'> {name} </span>
                <span className='price'> {price} </span>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);