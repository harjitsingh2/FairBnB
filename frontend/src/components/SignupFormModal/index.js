import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignupForm from './SignupForm';

function SignupFormModal({setToggleSignup}) {
  // const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* <button onClick={() => setShowModal(true)}>Sign Up</button> */}
      {/* {showModal && ( */}
        <Modal onClose={() => setToggleSignup(false)}>
          <SignupForm />
        </Modal>

    </>
  );
}

export default SignupFormModal;