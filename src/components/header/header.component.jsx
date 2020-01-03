import React from 'react';
import {createStructuredSelector} from 'reselect';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';

import { signOutStart } from '../../redux/user/user.actions';

import { connect } from 'react-redux'; 
import { Link } from 'react-router-dom';

import './header.styles.scss';

const Header = ({currentUser, hidden, signOutStart}) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        shop
      </Link>
      <Link className="option" to="/signin">
        contact
      </Link>
      {
        currentUser ?
          <div className="option" onClick={signOutStart}> Sing Out </div>
        :
          <Link className='option' to='/signin'> Sing In </Link>
      }
      <CartIcon />
    </div>
    {
      hidden ?
        null
        : 
        <CartDropdown />
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);