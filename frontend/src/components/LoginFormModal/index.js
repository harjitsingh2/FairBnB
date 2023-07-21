import React, {useEffect} from 'react';
import LoginForm from './LoginForm';
import ReactModal from 'react-modal';
import { useSelector } from 'react-redux';
import "./LoginForm.css";

function LoginFormModal() {
  const modal = useSelector(state => state.ui.modal)
  // console.log(modal);


  return (
    <>
        <ReactModal className="login-modal" ariaHideApp={false} isOpen={ modal === "login"}>
          <LoginForm />
        </ReactModal>

    </>
  );
}

export default LoginFormModal;

