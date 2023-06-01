import React from 'react';
import { NavLink } from 'react-router-dom';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import './Navigation.css';
import DemoLogin from '../LoginFormModal/DemoLogin';
import logo from '../../image/Fairbnb-logo.png';

function Navigation() {

  return (
    <>
      <div className='navbar'>
      <NavLink exact to="/"><img src={logo} className='logo' alt=''/></NavLink>
        <ul id="nav-list">
          <li>
            <br></br><br></br>
            <ProfileButton />
            <LoginFormModal />
            <SignupFormModal />
            <br></br><br></br>
            <DemoLogin />
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navigation;


