import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import * as sessionActions from '../../store/session';
import './Navigation.css';
import DemoLogin from '../LoginFormModal/DemoLogin';
import logo from '../../image/Fairbnb-logo.png';

function Navigation({setToggleLogin, setToggleSignup}) {
  const sessionUser = useSelector(state => state.session.user);


  // let sessionLinks;
  // if (sessionUser) { 
  //   sessionLinks = (
  //     <ProfileButton user={sessionUser} />
  //   );
  // } else {
  //   sessionLinks = (
  //     <div className='nav-buttons'>
  //       <ProfileButton>

  //         <LoginFormModal />
  //         <br></br>
  //         <SignupFormModal />
  //         <DemoLogin />
  //       </ProfileButton>
  //     </div>
  //   );
  // }

  return (
    <>
      {/* <img src={logo} /> */}
      <ul id="nav-list">
        <li>
          <NavLink exact to="/">Home</NavLink>
          <br></br><br></br>
          {/* {sessionLinks} */}
          <ProfileButton setToggleLogin={setToggleLogin} setToggleSignup={setToggleSignup}/>
          <br></br><br></br>
          <DemoLogin />
        </li>
      </ul>
    </>
  );
}

export default Navigation;


