import React from 'react';
import SignupForm from './SignupForm';
import ReactModal from 'react-modal';
import { useSelector } from 'react-redux';
import "../LoginFormModal/LoginForm.css";

function SignupFormModal() {
  const modal = useSelector(state => state.ui.modal)

  return (
    <>
        <ReactModal className="login-modal" ariaHideApp={false} isOpen={ modal ==="signup" }>
          <SignupForm />
        </ReactModal>

    </>
  );
}

export default SignupFormModal;