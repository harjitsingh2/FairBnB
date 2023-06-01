import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
import * as uiActions from '../../store/ui';

function ProfileButton() {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const currentUser = useSelector((state) => state.session.user);
  
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);


  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  const openLogin = () => {
    dispatch({type: uiActions.OPEN_LOGIN_MODAL, payload: 'open'})
  }

  const openSignup = () => {
    dispatch({type: uiActions.OPEN_SIGNUP_MODAL, payload: 'open'})
  }


  if (currentUser) {

    return (
      <>
        <button onClick={openMenu}>
          <i className="fa-solid fa-circle-user" size="2xl" style={{color: "#ffc800",}}></i>
        </button>
        {showMenu && (
          <ul className="profile-dropdown">
            <li>Welcome, {currentUser.firstName}!</li>
            <li>
              <button onClick={logout}>Log Out</button>
            </li>
          </ul>
        )}
      </>
    );
  } else {
    return (
      <>
        <button onClick={openMenu}>
        <i className="fa-solid fa-circle-user" size="xl" style={{color: "#5e646e",}}></i>
        </button>
        {showMenu && (
          <ul className="profile-dropdown">
            <li><button onClick={openLogin}>Login</button></li>
            <li>
              <button onClick={openSignup}>Sign Up</button>
            </li>
          </ul>
        )}
    </>
    )

  }

}

export default ProfileButton;

