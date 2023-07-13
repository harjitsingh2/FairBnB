import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { createReview } from '../../store/reviews';
// import StarRating from './StarRating';
import './ReviewForm.css';
import Modal from 'react-modal';

const ReviewsForm = ({ listingId }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();

  const formSubmit = (data) => {
    const reviewData = {
      listingId: listingId,
    //   rating: data.rating,
      body: data.body,
      cleanliness: data.cleanliness,
      communication: data.communication,
      checkin: data.checkin,
      accuracy: data.accuracy,
      location: data.location,
      value: data.value
    };

    dispatch(createReview(reviewData));
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(formSubmit)} className='reviewForm'>
        {/* <div className="form-header">
                <button
                className="closeButton"
                onClick={closeModal}
                >
                X
                </button>
                <h2>Leave a Review</h2>
            </div> */}
        {/* <div>
          <label>Rating:</label>
          <input
            type="number"
            name="rating"
            min="1"
            max="5"
            {...register('rating', { required: true, min: 1, max: 5 })}
          />
          {errors.rating && <span>Please enter a rating between 1 and 5.</span>}
        </div> */}
        <div>
          <label>Cleanliness:</label>
          {/* <StarRating name="cleanliness" register={register} required onChange={(value) => handleRatingChange('rating', value)} /> */}
          <input
            type="number"
            name="cleanliness"
            min="1"
            max="5"
            {...register('cleanliness', { required: true, min: 1, max: 5 })}
          />
          {errors.cleanliness && <span>Please enter a rating between 1 and 5.</span>}
        </div>
        <div>
          <label>Communication:</label>
          <input
            type="number"
            name="communication"
            min="1"
            max="5"
            {...register('communication', { required: true, min: 1, max: 5 })}
          />
          {errors.communication && <span>Please enter a rating between 1 and 5.</span>}
        </div>
        <div>
          <label>Checkin:</label>
          <input
            type="number"
            name="checkin"
            min="1"
            max="5"
            {...register('checkin', { required: true, min: 1, max: 5 })}
          />
          {errors.checkin && <span>Please enter a rating between 1 and 5.</span>}
        </div>
        <div>
          <label>Accuracy:</label>
          <input
            type="number"
            name="accuracy"
            min="1"
            max="5"
            {...register('accuracy', { required: true, min: 1, max: 5 })}
          />
          {errors.accuracy && <span>Please enter a rating between 1 and 5.</span>}
        </div>
        <div>
          <label>Location:</label>
          <input
            type="number"
            name="location"
            min="1"
            max="5"
            {...register('location', { required: true, min: 1, max: 5 })}
          />
          {errors.location && <span>Please enter a rating between 1 and 5.</span>}
        </div>
        <div>
          <label>Value:</label>
          <input
            type="number"
            name="value"
            min="1"
            max="5"
            {...register('value', { required: true, min: 1, max: 5 })}
          />
          {errors.value && <span>Please enter a rating between 1 and 5.</span>}
        </div>
        <div>
          <label>Comments:</label>
          <textarea name="body" {...register('body')} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ReviewsForm;
