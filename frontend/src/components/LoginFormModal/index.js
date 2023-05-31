import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';

function LoginFormModal( {setToggleLogin }) {
  // const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* <button onClick={() => setShowModal(true)}>Log In</button> */}
      {/* {showModal && ( */}
        <Modal onClose={() => setToggleLogin(false)}>
          <LoginForm />
        </Modal>

    </>
  );
}

export default LoginFormModal;

