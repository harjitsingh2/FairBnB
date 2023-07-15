import csrfFetch from "./csrf";

// Action Constants
const RECEIVE_REVIEW = 'reviews/RECEIVE_REVIEW';
const RECEIVE_REVIEWS = 'reviews/RECEIVE_REVIEWS';
const REMOVE_REVIEW = 'reviews/REMOVE_REVIEW';

// Action Creators
export const receiveReview = (review) => ({
    type: RECEIVE_REVIEW,
    payload: review
  });
  
  export const receiveReviews = (reviews) => {
      // debugger
      return {  
          type: RECEIVE_REVIEWS,
          payload: reviews
      }
  };
  
  export const removeReview = (reviewId) => ({
    type: REMOVE_REVIEW,
    payload: reviewId
  });

  // Selectors
export const getReview = (reviewId) => (state) => state.reviews ? state.reviews[reviewId] : null;

export const getReviews = (state) => {
    return state.reviews ? Object.values(state.reviews) : [];
}

// Thunk Action Creators

export const fetchReview = (reviewId) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews/${reviewId}`);
    const data = await response.json();
    dispatch(receiveReview(data.review))
}

export const fetchReviews = (listingId) => async (dispatch) => {
    // const response = await csrfFetch(`/api/reviews/${listingId}`);
    const response = await csrfFetch(`/api/reviews?listing_id=${listingId}`);
    // console.log(response);
    // const response = await csrfFetch('/api/reviews');
    if (response.ok) {
      const data = await response.json();
    //   console.log(data);
      dispatch(receiveReviews(data.reviews));
    }
};


export const createReview = (review) => async (dispatch) => {
    // debugger;
  const response = await csrfFetch(`/api/reviews`, 
  {
    method: "POST",
    body: JSON.stringify({review})
    // body: JSON.stringify({review: review})
  }
  )
  if (response.ok) {
    const data = await response.json();
    // console.log(data);
    // const createdReview = data.review;
    // dispatch(receiveReview(createdReview));
    dispatch(receiveReview(data.review))
  } else {
    throw response
  }

//   return response;
};


  

export const updateReview = (review) => async (dispatch) => {

    const response = await csrfFetch(`/api/reviews/${review.id}`, 
    {
        method: "PATCH",
        body: JSON.stringify({review: review})
    }
    )
    if (response.ok) {
        const data = await response.json();
        dispatch(receiveReview(data.review))
    } else {
        throw response
    }

    return response;
};

export const deleteReview = (reviewId) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews/${reviewId}`, 
    {
        method: "DELETE",
    }
    )
    if (response.ok) {
        dispatch(removeReview(reviewId))
    } else {
        throw response
    }

    return response;
};

// Reviews Reducer
const reviewsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = {...state};

    switch (action.type) {
        case RECEIVE_REVIEW:
        // console.log(action);    
        // console.log(action.payload);
            newState[action.payload.id] = action.payload 
            return newState;
        case RECEIVE_REVIEWS:
            return { ...newState, ...action.payload }
        case REMOVE_REVIEW:
            delete newState[action.payload];
            return newState;
        default:
            return state;
    }
};

export default reviewsReducer;