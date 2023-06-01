import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
import * as uiActions from '../../store/ui';

function ProfileButton() {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const currentUser = useSelector((state) => state.session.user);
  
  const openMenu = () => {
    // if (showMenu) return;
    setShowMenu(true);
  };
  
  // updated useEffect
  useEffect(() => {
    // if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    // document.addEventListener('click', closeMenu);

    if (showMenu) {
      document.addEventListener('click', closeMenu);
    }
  
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

  // added this
  const toggleMenu = (e) => {
    setShowMenu((prevState) => !prevState);
  };
  


  // if (currentUser) {

  //   return (
  //     <>
  //       <button onClick={openMenu}>
  //         <i className="fa-solid fa-circle-user" size="2xl" style={{color: "#ffc800",}}></i>
  //       </button>
  //       {showMenu && (
  //         <ul className="profile-dropdown">
  //           <li>Welcome, {currentUser.firstName}!</li>
  //           <li>
  //             <button onClick={logout}>Log Out</button>
  //           </li>
  //         </ul>
  //       )}
  //     </>
  //   );
  // } else {
  //   return (
  //     <>
  //       <button onClick={openMenu}>
  //       <i className="fa-solid fa-circle-user" size="xl" style={{color: "#5e646e",}}></i>
  //       </button>
  //       {showMenu && (
  //         <ul className="profile-dropdown">
  //           <li><button onClick={openLogin}>Login</button></li>
  //           <li>
  //             <button onClick={openSignup}>Sign Up</button>
  //           </li>
  //         </ul>
  //       )}
  //   </>
  //   )

  // }

  if (currentUser) {
    return (
      <>
        <button onClick={toggleMenu}>
          {/* <i className="fa-solid fa-circle-user" size="2xl" style={{ color: "#ffc800" }}></i> */}
          <div className="container"> 
            <div className="rounded-icon-button"> 
              <div className="hamburger-button">
                <i className="fas fa-bars"></i>
              </div>
              <div className="user-button">
                <i className="fas fa-user"></i>
              </div>
            </div>
          </div> 
        </button>
        <ul className={`profile-dropdown ${showMenu ? 'open' : ''}`}>
          <li>Welcome, {currentUser.firstName}!</li>
          <li>
            <button onClick={logout}>Log Out</button>
          </li>
        </ul>
      </>
    );
  } else {
    return (
      <>
        <button onClick={toggleMenu}>
          {/* <i className="fa-solid fa-circle-user" size="xl" style={{ color: "#5e646e" }}></i> */}
          <div className="container"> 
            <div className="rounded-icon-button"> 
              <div className="hamburger-button">
                <i className="fas fa-bars"></i>
              </div>
              <div className="user-button">
                <i className="fas fa-user"></i>
              </div>
            </div>
          </div> 
        </button>
        <ul className={`profile-dropdown ${showMenu ? 'open' : ''}`}>
          <li>
            <button onClick={openLogin}>Login</button>
          </li>
          <li>
            <button onClick={openSignup}>Sign Up</button>
          </li>
        </ul>
      </>
    );
  }

}

export default ProfileButton;


