import './ReviewsIndex.css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchReviews, getReviews } from '../../store/reviews';
import ReviewItem from './ReviewItem';
import star from '../../image/star.png';



const ReviewsIndex = ({ listingId2, onOverallRatingChange }) => {
  const dispatch = useDispatch();
  const reviews = useSelector(getReviews);

//   console.log(listingId2);
  useEffect(() => {
    dispatch(fetchReviews(listingId2));
  }, [dispatch]);
  // useEffect(() => {
  //   dispatch(fetchReviews(listingId2));
  //   const rating = overallRating();
  //   onOverallRatingChange(rating)
  // }, [dispatch, onOverallRatingChange]);

  const filteredReviews = reviews.filter((review) => review.listingId === listingId2);
//   console.log('reviews');
//   console.log(reviews);
//   console.log('filteredReviews');
  // console.log(filteredReviews);

  // Functions for calculating overall rating of each review category for the listing

  const overallRating = () => {
    if (filteredReviews.length === 0) {
      return 0;
    }

    let ratingsAdded = 0;
    let overallRating = 0;
    filteredReviews.forEach(review => ratingsAdded += review.rating)
    overallRating = ratingsAdded / filteredReviews.length; 
    overallRating = Math.round(overallRating * 100) / 100;
    onOverallRatingChange(overallRating);
    return overallRating;
  }

  const overallCleanliness = () => {
    if (filteredReviews.length === 0) {
      return 0;
    }

    let total = 0;
    filteredReviews.forEach(review => total += review.cleanliness)
    return Math.round((total/filteredReviews.length) *100) / 100
  }

  const overallCommunication = () => {
    if (filteredReviews.length === 0) {
      return 0;
    }

    let total = 0;
    filteredReviews.forEach(review => total += review.communication)
    return Math.round((total/filteredReviews.length) *100) / 100
  }
  const overallCheckin = () => {
    if (filteredReviews.length === 0) {
      return 0;
    }

    let total = 0;
    filteredReviews.forEach(review => total += review.checkin)
    return Math.round((total/filteredReviews.length) *100) / 100
  }
  const overallAccuracy = () => {
    if (filteredReviews.length === 0) {
      return 0;
    }

    let total = 0;
    filteredReviews.forEach(review => total += review.accuracy)
    return Math.round((total/filteredReviews.length) *100) / 100
  }
  const overallLocation = () => {
    if (filteredReviews.length === 0) {
      return 0;
    }

    let total = 0;
    filteredReviews.forEach(review => total += review.location)
    return Math.round((total/filteredReviews.length) *100) / 100
  }
  const overallValue = () => {
    if (filteredReviews.length === 0) {
      return 0;
    }

    let total = 0;
    filteredReviews.forEach(review => total += review.value)
    return Math.round((total/filteredReviews.length) *100) / 100
  }

  if (filteredReviews.length === 0) {
    return <div>No reviews found for this listing.</div>;
  }

  return (
    <div>
      {filteredReviews.length === 1 ? 
      <div id='rating'><img src={star} className="star"/> {overallRating()} · {filteredReviews.length} Review</div> :
      <div id='rating'><img src={star} className="star"/> {overallRating()} · {filteredReviews.length} Reviews</div>
      }
      
      <br></br>
      <div className='categories'>
        {/* <li>Cleanliness: {overallCleanliness()}</li> */}
        <li>
          Cleanliness 
          <div className="rating-bar">
            <div className="rating-fill" style={{ width: `${(overallCleanliness() / 5) * 100}%` }}></div>
          </div>
          <span className="rating-value">{overallCleanliness()}</span>
        </li>
        <li>
          Accuracy 
          <div className="rating-bar">
            <div className="rating-fill" style={{ width: `${(overallAccuracy() / 5) * 100}%` }}></div>
          </div>
          <span className="rating-value">{overallAccuracy()}</span>
        </li>
        <li>
          Communication 
          <div className="rating-bar">
            <div className="rating-fill" style={{ width: `${(overallCommunication() / 5) * 100}%` }}></div>
          </div>
          <span className="rating-value">{overallCommunication()}</span>
        </li>
        <li>
          Location 
          <div className="rating-bar">
            <div className="rating-fill" style={{ width: `${(overallLocation() / 5) * 100}%` }}></div>
          </div>
          <span className="rating-value">{overallLocation()}</span>
        </li>
        <li>
          Checkin 
          <div className="rating-bar">
            <div className="rating-fill" style={{ width: `${(overallCheckin() / 5) * 100}%` }}></div>
          </div>
          <span className="rating-value">{overallCheckin()}</span>
        </li>
        <li>
          Value 
          <div className="rating-bar">
            <div className="rating-fill" style={{ width: `${(overallValue() / 5) * 100}%` }}></div>
          </div>
          <span className="rating-value">{overallValue()}</span>
        </li>
      </div>
      <br></br>
      <div className='review-item'>
        {filteredReviews.map((review) => (
          <ReviewItem key={review.id} review={review}/>
        ))}
      </div>
    </div>
  );
};

export default ReviewsIndex;
