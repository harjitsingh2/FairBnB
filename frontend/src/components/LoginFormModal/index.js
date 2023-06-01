import React from 'react';
import LoginForm from './LoginForm';
import ReactModal from 'react-modal';
import { useSelector } from 'react-redux';

function LoginFormModal() {
  const modal = useSelector(state => state.ui.modal)
  // console.log(modal);

  return (
    <>
        <ReactModal isOpen={ modal === "login"}>
          <LoginForm />
        </ReactModal>

    </>
  );
}

export default LoginFormModal;

