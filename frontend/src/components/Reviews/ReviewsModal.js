import React, { useState, useEffect, useContext } from 'react';
import Modal from 'react-modal';
import ReviewForm from './ReviewForm';
import UpdateReview from './UpdateReviewForm';
import './ReviewForm.css';
import { deleteReview, getReview, fetchReview } from '../../store/reviews';
import { useDispatch, useSelector } from 'react-redux';
import ReviewIdContext from '../../context/ReviewIdContext';
import ReviewerIdContext from '../../context/ReviewerIdContext';

const ReviewsModal = ({ listingId, reservationId, reviewed, reviewProp }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const dispatch = useDispatch();

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

  // useEffect(() => {
  //   const handleClickOutside = () => {
  //     closeModal() 
  //   };
  
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [dispatch]);


  // Deleting review
//   const reviewId = useContext(ReviewIdContext)
//   const reviewerId = useContext(ReviewerIdContext)

// debugger

  const clickDelete = (e) => {
    // console.log(reviewProp)
    e.preventDefault();
    dispatch(deleteReview(reviewProp.id));
  }

  return (
    <div>
      { reviewed ? 
        (<div> 
            <button className='reservation-button' onClick={openModal}>Update Review</button>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className='review-modal' ariaHideApp={false}>
            <UpdateReview listingId={listingId} reservationId={reservationId} reviewProp={reviewProp} closeModal={handleFormSubmit}/>
            <button onClick={closeModal} className='close-review'>X</button>
            </Modal>
            <br></br>
            <br></br>
            <button className='reservation-button' type='submit' onClick={clickDelete}>Delete Review</button>
        </div>) :

      (<div>
        <button className='reservation-button' onClick={openModal}>Leave a Review</button>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className='review-modal' ariaHideApp={false}>
            <ReviewForm listingId={listingId} reservationId={reservationId} closeModal={handleFormSubmit}/>
            <button onClick={closeModal} className='close-review'>X</button>
        </Modal>
      </div>)
      }
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
