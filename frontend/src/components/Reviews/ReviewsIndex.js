import './ReviewsIndex.css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchReviews, getReviews } from '../../store/reviews';
import ReviewItem from './ReviewItem';

const ReviewsIndex = ({ listingId2 }) => {
  const dispatch = useDispatch();
  const reviews = useSelector(getReviews);

//   console.log(listingId2);
  useEffect(() => {
    dispatch(fetchReviews(listingId2));
  }, [dispatch]);

  const filteredReviews = reviews.filter((review) => review.listingId === listingId2);
//   console.log('reviews');
//   console.log(reviews);
//   console.log('filteredReviews');
  // console.log(filteredReviews);

  const overallRating = () => {
    let ratingsAdded = 0;
    let overallRating = 0;
    filteredReviews.forEach(review => ratingsAdded += review.rating)
    overallRating = ratingsAdded / filteredReviews.length; 
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
