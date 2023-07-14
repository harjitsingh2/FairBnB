import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { createReview } from '../../store/reviews';
// import StarRating from './StarRating';
import './ReviewForm.css';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const ReviewsForm = ({ listingId, reservationId }) => {
  const { register, formState: { errors } } = useForm();
  const dispatch = useDispatch();

  const [cleanliness, setCleanliness] = useState(1);
  const [communication, setCommunication] = useState(1);
  const [checkin, setCheckin] = useState(1);
  const [accuracy, setAccuracy] = useState(1);
  const [location, setLocation] = useState(1);
  const [value, setValue] = useState(1);
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { listingId, reservationId, cleanliness, communication, checkin, accuracy, location, value, body }
    dispatch(createReview(payload));
  };


  return (
    <div>
      <form onSubmit={handleSubmit} className='reviewForm'>


        <div>
          <label>Cleanliness:</label>
          {/* <StarRating name="cleanliness" register={register} required onChange={(value) => handleRatingChange('rating', value)} /> */}
          <input
            type="number"
            name="cleanliness"
            min="1"
            max="5"
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
            onChange={(e) => setValue(e.target.value)} required
          />
          {errors.value && <span>Please enter a rating between 1 and 5.</span>}
        </div>
        <div>
          <label>Comments:</label>
          <textarea name="body" onChange={(e) => setBody(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ReviewsForm;


// import React, {useState} from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useForm } from 'react-hook-form';
// import { createReview } from '../../store/reviews';
// // import StarRating from './StarRating';
// import './ReviewForm.css';
// import Modal from 'react-modal';

// const ReviewsForm = ({ listingId }) => {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const dispatch = useDispatch();

//   const formSubmit = (data) => {
//     const reviewData = {
//       listingId: listingId,
//     //   reservationId: reservationId,
//     //   rating: data.rating,
//       body: parseInt(data.body),
//       cleanliness: parseInt(data.cleanliness),
//       communication: parseInt(data.communication),
//       checkin: parseInt(data.checkin),
//       accuracy: parseInt(data.accuracy),
//       location: parseInt(data.location),
//       value: parseInt(data.value)
//     };

//     dispatch(createReview(reviewData));
//   };

//   const [modalIsOpen, setModalIsOpen] = useState(false);

//   const openModal = () => {
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit(formSubmit)} className='reviewForm'>
//         {/* <div className="form-header">
//                 <button
//                 className="closeButton"
//                 onClick={closeModal}
//                 >
//                 X
//                 </button>
//                 <h2>Leave a Review</h2>
//             </div> */}
//         {/* <div>
//           <label>Rating:</label>
//           <input
//             type="number"
//             name="rating"
//             min="1"
//             max="5"
//             {...register('rating', { required: true, min: 1, max: 5 })}
//           />
//           {errors.rating && <span>Please enter a rating between 1 and 5.</span>}
//         </div> */}
//         <div>
//           <label>Cleanliness:</label>
//           {/* <StarRating name="cleanliness" register={register} required onChange={(value) => handleRatingChange('rating', value)} /> */}
//           <input
//             type="number"
//             name="cleanliness"
//             min="1"
//             max="5"
//             {...register('cleanliness', { required: true, min: 1, max: 5 })}
//           />
//           {errors.cleanliness && <span>Please enter a rating between 1 and 5.</span>}
//         </div>
//         <div>
//           <label>Communication:</label>
//           <input
//             type="number"
//             name="communication"
//             min="1"
//             max="5"
//             {...register('communication', { required: true, min: 1, max: 5 })}
//           />
//           {errors.communication && <span>Please enter a rating between 1 and 5.</span>}
//         </div>
//         <div>
//           <label>Checkin:</label>
//           <input
//             type="number"
//             name="checkin"
//             min="1"
//             max="5"
//             {...register('checkin', { required: true, min: 1, max: 5 })}
//           />
//           {errors.checkin && <span>Please enter a rating between 1 and 5.</span>}
//         </div>
//         <div>
//           <label>Accuracy:</label>
//           <input
//             type="number"
//             name="accuracy"
//             min="1"
//             max="5"
//             {...register('accuracy', { required: true, min: 1, max: 5 })}
//           />
//           {errors.accuracy && <span>Please enter a rating between 1 and 5.</span>}
//         </div>
//         <div>
//           <label>Location:</label>
//           <input
//             type="number"
//             name="location"
//             min="1"
//             max="5"
//             {...register('location', { required: true, min: 1, max: 5 })}
//           />
//           {errors.location && <span>Please enter a rating between 1 and 5.</span>}
//         </div>
//         <div>
//           <label>Value:</label>
//           <input
//             type="number"
//             name="value"
//             min="1"
//             max="5"
//             {...register('value', { required: true, min: 1, max: 5 })}
//           />
//           {errors.value && <span>Please enter a rating between 1 and 5.</span>}
//         </div>
//         <div>
//           <label>Comments:</label>
//           <textarea name="body" {...register('body')} />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default ReviewsForm;
