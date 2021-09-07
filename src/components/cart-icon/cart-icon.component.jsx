import React from 'react';
import { ReactComponent as ShoppingIconBlack } from '../../assets/shopping-bag-black.svg';
import { ReactComponent as ShoppingIconWhite } from "../../assets/shopping-bag-white.svg";
import './cart-icon.styles.scss';
import  { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

const CartIcon = ({ toggleHiddenCart, itemCount, isWhiteBg }) => (
  <div className="cart-icon" onClick={toggleHiddenCart}>
    {isWhiteBg ? (
      <ShoppingIconWhite className="shopping-icon" />
    ) : (
      <ShoppingIconBlack className="shopping-icon" />
    )}
    <span className={`item-count ${isWhiteBg ? 'text-black' : 'text-white'}`}>{itemCount}</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleHiddenCart: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);