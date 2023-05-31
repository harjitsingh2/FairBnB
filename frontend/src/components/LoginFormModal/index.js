import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import ReactModal from 'react-modal';
import { useSelector } from 'react-redux';

function LoginFormModal() {
  // const [showModal, setShowModal] = useState(false);
  const modal = useSelector(state => state.ui.modal)
  console.log(modal);

  return (
    <>
      {/* <button onClick={() => setShowModal(true)}>Log In</button> */}
      {/* {showModal && ( */}
        <ReactModal isOpen={ modal === "login"}>
          <LoginForm />
        </ReactModal>

    </>
  );
}

export default LoginFormModal;

