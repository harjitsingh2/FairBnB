import React from 'react';

const ReviewItem = ({ review }) => {
  return (
    <div>
      <h3>Rating: {review.rating}</h3>
      <p>Body: {review.body}</p>
      <p>Cleanliness: {review.cleanliness}</p>
      <p>Communication: {review.communication}</p>
      <p>Checkin: {review.checkin}</p>
      <p>Accuracy: {review.accuracy}</p>
      <p>Location: {review.location}</p>
      <p>Value: {review.value}</p>
      
    </div>
  );
};

export default ReviewItem;
