import React, { useState } from 'react';
import Modal from 'react-modal';
import ReviewForm from './ReviewForm';
import './ReviewForm.css';

const ReviewsModal = ({ listingId, reservationId }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleFormSubmit = () => {
    setFormSubmitted(true);
    closeModal();
  };

  return (
    <div>
      <button onClick={openModal}>Leave a Review</button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className='review-modal' ariaHideApp={false}>
        <ReviewForm listingId={listingId} reservationId={reservationId} closeModal={handleFormSubmit}/>
        <button onClick={closeModal} className='close-review'>X</button>
      </Modal>
    </div>
  );

// return (
//     <div>
//       <button onClick={openModal}>Leave a Review</button>
//       <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className='review-modal'>
//         {formSubmitted ? (
//           <div className="form-submitted-message">
//             <p>Review submitted successfully!</p>
//             <button onClick={closeModal} className='close-review'>X</button>
//           </div>
//         ) : (
//           <div>
//               <ReviewForm listingId={listingId} reservationId={reservationId} closeModal={handleFormSubmit} />
//               <button onClick={closeModal} className='close-review'>X</button>
//           </div>
//         )}
//       </Modal>
//     </div>
//   );
};

export default ReviewsModal;
