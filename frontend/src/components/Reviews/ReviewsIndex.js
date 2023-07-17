import './ReviewsIndex.css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchReviews, getReviews } from '../../store/reviews';
import ReviewItem from './ReviewItem';

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

  if (filteredReviews.length === 0) {
    return <div>No reviews found for this listing.</div>;
  }

  return (
    <div>
      <div>Overall Rating: {overallRating()}</div>
      <br></br>
      {filteredReviews.map((review) => (
        <ReviewItem key={review.id} review={review} />
      ))}
    </div>
  );
};

export default ReviewsIndex;
