import React from 'react';
import { NavLink } from 'react-router-dom';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import './Navigation.css';
// import DemoLogin from '../LoginFormModal/DemoLogin';
import logo from '../../image/Fairbnb-logo.png';

function Navigation() {

  return (
    <>
      <div className='navbar'>
      <div className='threeicons'>

        <NavLink exact to="/"><img src={logo} className='logo' alt=''/></NavLink>
        <div className='personal-links'>
          <a href="https://github.com/harjitsingh2"><i className="fa-brands fa-github"></i></a>
          <a href="https://www.linkedin.com/in/harjitsingh2/"><i className="fa-brands fa-linkedin"></i></a>
        </div>
      </div>
      
        <ul id="nav-list">
          <li>
            <br></br><br></br>
            <ProfileButton />
            <LoginFormModal />
            <SignupFormModal />
            <br></br><br></br>
            {/* <DemoLogin /> */}
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navigation;


