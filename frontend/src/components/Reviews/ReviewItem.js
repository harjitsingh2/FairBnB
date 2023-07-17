import React from 'react';
import ReviewIdContext from '../../context/ReviewIdContext';
import ReviewerIdContext from '../../context/ReviewerIdContext';

const ReviewItem = ({ review }) => {
    const reviewId = review.id
    const reviewerId = review.reviewerId
    // debugger;
  
    return (
    <div>
        {/* <ReviewIdContext.Provider value={reviewId}>    
        <ReviewerIdContext.Provider value={reviewerId}>     */}
            {/* <h3>Rating: {review.rating}</h3> */}
            <p>Review: {review.body}</p>
            <p>Cleanliness: {review.cleanliness}</p>
            <p>Communication: {review.communication}</p>
            <p>Checkin: {review.checkin}</p>
            <p>Accuracy: {review.accuracy}</p>
            <p>Location: {review.location}</p>
            <p>Value: {review.value}</p>
        {/* </ReviewerIdContext.Provider>
        </ReviewIdContext.Provider> */}
    </div>
  );
};

export default ReviewItem;
