import React from 'react';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

import { connect } from 'react-redux'; 
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss';

const Header = ({currentUser, hidden}) => (
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
          <div className="option" onClick={() => auth.signOut()}> Sing Out </div>
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

const mapStateToProps = ({user: { currentUser }, cart: { hidden }}) => ({
  currentUser,
  hidden
})

export default connect(mapStateToProps)(Header);