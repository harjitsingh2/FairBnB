import React from 'react';
import SignupForm from './SignupForm';
import ReactModal from 'react-modal';
import { useSelector } from 'react-redux';

function SignupFormModal() {
  const modal = useSelector(state => state.ui.modal)

  return (
    <>
        <ReactModal isOpen={ modal ==="signup" }>
          <SignupForm />
        </ReactModal>

    </>
  );
}

export default SignupFormModal;