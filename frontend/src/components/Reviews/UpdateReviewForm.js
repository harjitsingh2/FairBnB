import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { updateReview } from '../../store/reviews';
import StarRating from './StarRating';
import './ReviewForm.css';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const UpdateReview = ({ listingId, reservationId, closeModal, reviewProp }) => {
  const { register, formState: { errors } } = useForm();
  const dispatch = useDispatch();

  const [cleanliness, setCleanliness] = useState(reviewProp.cleanliness);
  const [communication, setCommunication] = useState(reviewProp.communication);
  const [checkin, setCheckin] = useState(reviewProp.checkin);
  const [accuracy, setAccuracy] = useState(reviewProp.accuracy);
  const [location, setLocation] = useState(reviewProp.location);
  const [value, setValue] = useState(reviewProp.value);
  const [body, setBody] = useState(reviewProp.body);
  const reviewId = reviewProp.id;

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { id: reviewId, listingId, reservationId, cleanliness, communication, checkin, accuracy, location, value, body }
    dispatch(updateReview(payload));
    closeModal();
  };

  const handleRatingChange = (name, value) => {
    switch (name) {
      case 'cleanliness':
        setCleanliness(value);
        break;
      case 'communication':
        setCommunication(value);
        break;
      case 'checkin':
        setCheckin(value);
        break;
      case 'accuracy':
        setAccuracy(value);
        break;
      case 'location':
        setLocation(value);
        break;
      case 'value':
        setValue(value);
        break;
      case 'body':
        setBody(value);
        break;
      default:
        break;
    }
  };


  return (
    <div>
      <form onSubmit={handleSubmit} className='reviewForm'>
        <h2>Update Review</h2>
        <br></br>

        <div>
          {/* <label>Cleanliness:</label> */}
          <StarRating
            type="number"
            name="cleanliness"
            rating={cleanliness}
            min="1"
            max="5"
            value={cleanliness}
            placeholder={reviewProp.cleanliness}
            handleChange={handleRatingChange}
            onChange={(e) => setCleanliness(e.target.value)} required
          />
          {errors.cleanliness && <span>Please enter a rating between 1 and 5.</span>}
        </div>
        <div>
          {/* <label>Communication:</label> */}
          <StarRating
            type="number"
            name="communication"
            rating={communication}
            handleChange={handleRatingChange}
            min="1"
            max="5"
            value={reviewProp.communication}
            onChange={(e) => setCommunication(e.target.value)} required
          />
          {errors.communication && <span>Please enter a rating between 1 and 5.</span>}
        </div>
        <div>
          {/* <label>Checkin:</label> */}
          <StarRating
            type="number"
            name="checkin"
            rating={checkin}
            handleChange={handleRatingChange}
            min="1"
            max="5"
            value={reviewProp.checkin}
            onChange={(e) => setCheckin(e.target.value)} required
          />
          {errors.checkin && <span>Please enter a rating between 1 and 5.</span>}
        </div>
        <div>
          {/* <label>Accuracy:</label> */}
          <StarRating
            type="number"
            name="accuracy"
            rating={accuracy}
            handleChange={handleRatingChange}
            min="1"
            max="5"
            value={reviewProp.accuracy}
            onChange={(e) => setAccuracy(e.target.value)} required
          />
          {errors.accuracy && <span>Please enter a rating between 1 and 5.</span>}
        </div>
        <div>
          {/* <label>Location:</label> */}
          <StarRating
            type="number"
            name="location"
            rating={location}
            handleChange={handleRatingChange}
            min="1"
            max="5"
            placeholder={reviewProp.location}
            onChange={(e) => setLocation(e.target.value)} required
          />
          {errors.location && <span>Please enter a rating between 1 and 5.</span>}
        </div>
        <div>
          {/* <label>Value:</label> */}
          <StarRating
            type="number"
            name="value"
            rating={value}
            handleChange={handleRatingChange}
            min="1"
            max="5"
            // value={reviewProp.value}
            onChange={(e) => setValue(e.target.value)} required
          />
          {errors.value && <span>Please enter a rating between 1 and 5.</span>}
        </div>
        <div className='comment-container'>
          <label>Comments:</label>
          <div id='comment-box'><textarea name="body" placeholder={reviewProp.body} value={body} onChange={(e) => setBody(e.target.value)} /></div>
        </div>
        <button type="submit" className='review-button'>Update Review</button>
      </form>
    </div>
  );
};

export default UpdateReview;
