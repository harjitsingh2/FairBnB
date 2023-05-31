import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
// import SignupFormModal from "../SignupFormModal";
// import LoginFormModal from "../LoginFormModal";

function ProfileButton({ setToggleLogin, setToggleSignup }) {
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
  // const login = (e) => {
  //   e.preventDefault();
  //   dispatch(sessionActions.login());
  // };
  // const signup = (e) => {
  //   e.preventDefault();
  //   dispatch(sessionActions.signup());
  // };

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
            <li><button onClick={() => setToggleLogin(true)}>Login</button></li>
            <li>
              <button onClick={() => setToggleSignup(true)}>Sign Up</button>
            </li>
          </ul>
        )}
        {/* {showMenu && (
          <div>
            <SignupFormModal />
            <LoginFormModal />
          </div>
        )

        } */}
    </>
    )

  }

}

export default ProfileButton;

