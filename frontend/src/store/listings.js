import csrfFetch from "./csrf.js";

// Action Constants
const SET_LISTING = 'listings/setListing';
const SET_LISTINGS = 'listings/setListings';

// Action Creators
export const setListing = (listing) => ({
    type: SET_LISTING,
    payload: listing
});

export const setListings = (listings) => ({
    type: SET_LISTINGS,
    payload: listings 
})

// Thunk Action Creators
export const fetchListing = (listingId) => async dispatch => {
    const response = await csrfFetch(`/api/listings/${listingId}`);

    const data = await response.json();
    dispatch(setListing(data.listing));
    return response;
}

export const fetchListings = () => async dispatch => {
    const response = await csrfFetch("/api/listings");

    const data = await response.json();
    dispatch(setListings(data));
    return response;
}

// Listings Reducer
const listingsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = {...state};

    switch (action.type) {
        case SET_LISTING:
            newState[action.listing.id] = action.listing;
            return newState;
        case SET_LISTINGS:
          return {...newState, ...action.listings};
        default:
          return state;
      }
}

export default listingsReducer;