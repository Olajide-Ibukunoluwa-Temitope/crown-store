import React, { useState, useEffect } from 'react';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { ReactComponent as Menu } from "../../assets/menu_icon.svg";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';


const Header = ({ currentUser, isHidden, isBannerlessPage }) => {
  const [shadowMenu, setShadowMenu] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);
  const windowTopPosition = 100;

  const toggleMenu = () => {
    setOpenMenu(!openMenu)
  }

  useEffect(() => {
    // const te = false;
    const onScroll = () => {
      let currentPosition = window.document.documentElement.scrollTop; // or use document.documentElement.scrollTop;
      if (currentPosition >= windowTopPosition) {
        // downscroll code
        setShadowMenu(true);
      } else {
        // upscroll code
        setShadowMenu(false);
      }
      setScrollPosition(currentPosition <= 0 ? 0 : currentPosition);
    };
    // onScroll();

    if (isBannerlessPage) {
      setShadowMenu(true);
    } else {
      window.addEventListener("scroll", onScroll);
    }
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollPosition, isBannerlessPage]);

  return (
    <div>
      <div className={`header ${shadowMenu ? "shadowNavbar" : ""}`}>
        <Link to="/" className="logo-container">
          <Logo className="logo" />
        </Link>
        <div className="options">
          <Link className="option" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <div className="option" onClick={() => auth.signOut()}>
              SIGN OUT
            </div>
          ) : (
            <Link className="option" to="/signin">
              SIGN IN
            </Link>
          )}
          <CartIcon isWhiteBg={shadowMenu} />
        </div>
        {isHidden ? null : <CartDropDown />}
      </div>
      {/* mobile header */}
      <div className={`mobile-header-container`}>
        <div className={"mobile-nav"}>
          <Link to="/" className="logo-container">
            <Logo className="logo" />
          </Link>
          <div onClick={toggleMenu}>
            <Menu className="menu" />
          </div>
        </div>
        <div className={`${openMenu ? "options" : "close-menu"}`}>
          <Link
            className="option"
            to="/shop"
            onClick={() => setOpenMenu(false)}
          >
            SHOP
          </Link>
          {currentUser ? (
            <div 
              className="option" 
              onClick={() => {
                auth.signOut()
                setOpenMenu(false)
              }
            }>
              SIGN OUT
            </div>
          ) : (
            <Link
              className="option"
              to="/signin"
              onClick={() => setOpenMenu(false)}
            >
              SIGN IN
            </Link>
          )}
          {/* <CartIcon isWhiteBg={shadowMenu} /> */}
          <Link className="option" to="/checkout">
            CHECKOUT
          </Link>
        </div>
        {/* {isHidden ? null : <CartDropDown />} */}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isHidden: selectCartHidden 
})

export default connect(mapStateToProps)(Header);