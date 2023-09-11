import React from 'react';
import './ReviewsIndex.css';
import ReviewIdContext from '../../context/ReviewIdContext';
import ReviewerIdContext from '../../context/ReviewerIdContext';

const ReviewItem = ({ review }) => {
    const reviewId = review.id
    const reviewerId = review.reviewerId
    // debugger;
    const reviewer = review.reviewer;
    // console.log(reviewer);
  
    // console.log(review.createdAt)

    const reviewDate = () => {
        let split = review.createdAt.split('-')
        let month = split[1]
        let year = split[0]

        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        let displayMonth = months[month-1]
        let displayDate = `${displayMonth} ${year}`
        return displayDate;
    }

    return (
    <div className='review-details'>
        {/* <ReviewIdContext.Provider value={reviewId}>    
        <ReviewerIdContext.Provider value={reviewerId}>     */}

            {/* <p>Reviewer: {review.reviewerId}</p> */}
            <p id='reviewer-name'>{review.reviewer.first_name} {review.reviewer.last_name}</p>
            <p id='review-date'>{reviewDate()}</p>
            <p>{review.body}</p>

        {/* </ReviewerIdContext.Provider>
        </ReviewIdContext.Provider> */}
    </div>
  );
};

export default ReviewItem;
