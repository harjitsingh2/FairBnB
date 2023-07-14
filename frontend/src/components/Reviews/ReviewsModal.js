import React, { useState } from 'react';
import Modal from 'react-modal';
import ReviewForm from './ReviewForm';
import './ReviewForm.css';

const ReviewsModal = ({ listingId, reservationId }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Leave a Review</button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className='review-modal'>
        <ReviewForm listingId={listingId} reservationId={reservationId}/>
        <button onClick={closeModal} className='close-review'>X</button>
      </Modal>
    </div>
  );
};

export default ReviewsModal;
