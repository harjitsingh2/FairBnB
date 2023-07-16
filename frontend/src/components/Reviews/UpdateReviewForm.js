import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { updateReview } from '../../store/reviews';
// import StarRating from './StarRating';
import './ReviewForm.css';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const UpdateReview = ({ listingId, reservationId, closeModal, reviewProp }) => {
  const { register, formState: { errors } } = useForm();
  const dispatch = useDispatch();

  const [cleanliness, setCleanliness] = useState(1);
  const [communication, setCommunication] = useState(1);
  const [checkin, setCheckin] = useState(1);
  const [accuracy, setAccuracy] = useState(1);
  const [location, setLocation] = useState(1);
  const [value, setValue] = useState(1);
  const [body, setBody] = useState("");
  const reviewId = reviewProp.id;

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { id: reviewId, listingId, reservationId, cleanliness, communication, checkin, accuracy, location, value, body }
    dispatch(updateReview(payload));
    closeModal();
  };


  return (
    <div>
      <form onSubmit={handleSubmit} className='reviewForm'>
        <h2>Update Review</h2>
        <br></br>

        <div>
          <label>Cleanliness:</label>
          {/* <StarRating name="cleanliness" register={register} required onChange={(value) => handleRatingChange('rating', value)} /> */}
          <input
            type="number"
            name="cleanliness"
            min="1"
            max="5"
            placeholder={reviewProp.cleanliness}
            onChange={(e) => setCleanliness(e.target.value)} required
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
            placeholder={reviewProp.communication}
            onChange={(e) => setCommunication(e.target.value)} required
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
            placeholder={reviewProp.checkin}
            onChange={(e) => setCheckin(e.target.value)} required
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
            placeholder={reviewProp.accuracy}
            onChange={(e) => setAccuracy(e.target.value)} required
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
            placeholder={reviewProp.location}
            onChange={(e) => setLocation(e.target.value)} required
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
            placeholder={reviewProp.value}
            onChange={(e) => setValue(e.target.value)} required
          />
          {errors.value && <span>Please enter a rating between 1 and 5.</span>}
        </div>
        <div>
          <label>Comments:</label>
          <textarea name="body" placeholder={reviewProp.body} onChange={(e) => setBody(e.target.value)} />
        </div>
        <button type="submit">Update Review</button>
      </form>
    </div>
  );
};

export default UpdateReview;
