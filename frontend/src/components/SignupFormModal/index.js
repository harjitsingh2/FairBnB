import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignupForm from './SignupForm';
import ReactModal from 'react-modal';
import { useSelector } from 'react-redux';

function SignupFormModal() {
  // const [showModal, setShowModal] = useState(false);
  const modal = useSelector(state => state.ui.modal)

  return (
    <>
      {/* <button onClick={() => setShowModal(true)}>Sign Up</button> */}
      {/* {showModal && ( */}
        <ReactModal isOpen={ modal ==="signup" }>
          <SignupForm />
        </ReactModal>

    </>
  );
}

export default SignupFormModal;