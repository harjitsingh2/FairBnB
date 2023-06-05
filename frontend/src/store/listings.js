import csrfFetch from "./csrf.js";

// Action Constants
const RECEIVE_LISTING = 'listings/RECEIVE_LISTING';
const RECEIVE_LISTINGS = 'listings/RECEIVE_LISTINGS';

// Action Creators
export const receiveListing = (listing) => ({
    type: RECEIVE_LISTING,
    payload: listing
});

export const receiveListings = (listings) => ({
    type: RECEIVE_LISTINGS,
    payload: listings 
})

// Selectors 
export const getListing = (listingId) => (state) => {
    if (state.listings) {
        return (state.listings[listingId])
    } else {
        return null 
    }
}

export const getListings = (state) => {
    if (state.listings) {
        return Object.values(state.listings)
    } else {
        return []
    }
}

// Thunk Action Creators
export const fetchListing = (listingId) => async dispatch => {
    const response = await csrfFetch(`/api/listings/${listingId}`);
    // debugger 
    const data = await response.json();
    dispatch(receiveListing(data));
    // return response;
}

export const fetchListings = () => async (dispatch) => {
    const response = await csrfFetch("/api/listings");

    const data = await response.json();
    dispatch(receiveListings(data));
    // return response;
}


// Listings Reducer
const listingsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = {...state};

    switch (action.type) {
        case RECEIVE_LISTING:
            // debugger 
            newState[action.payload.listing.id] = action.payload.listing;
            return newState;
        case RECEIVE_LISTINGS:
            // debugger;
        //   return {...state, ...action.listings};
            action.payload.forEach(
                listing => {newState[listing.id] = listing}
            )
            // debugger;
            return newState;
        default:
          return state;
      }
}

export default listingsReducer;

// import csrfFetch from "./csrf.js";

// // Action Constants
// const RECEIVE_LISTING = 'listings/RECEIVE_LISTING';
// const RECEIVE_LISTINGS = 'listings/RECEIVE_LISTINGS';
// const SET_SELECTED_CATEGORY = 'listings/SET_SELECTED_CATEGORY';

// // Action Creators
// export const receiveListing = (listing) => ({
//   type: RECEIVE_LISTING,
//   payload: listing
// });

// export const receiveListings = (listings) => ({
//   type: RECEIVE_LISTINGS,
//   payload: listings
// });

// export const setSelectedCategory = (category) => ({
//   type: SET_SELECTED_CATEGORY,
//   payload: category
// });

// // Selectors
// export const getListing = (listingId) => (state) => {
//   if (state.listings) {
//     return state.listings[listingId];
//   } else {
//     return null;
//   }
// };

// export const getListings = (state) => {
//   if (state.listings) {
//     return Object.values(state.listings);
//   } else {
//     return [];
//   }
// };

// export const getSelectedCategory = (state) => {
//   if (state.listings) {
//     return state.listings.selectedCategory;
//   } else {
//     return '';
//   }
// };

// export const getFilteredListings = (state) => {
//   const selectedCategory = getSelectedCategory(state);
//   const listings = getListings(state);

//   if (selectedCategory) {
//     return listings.filter(listing => listing.category === selectedCategory);
//   } else {
//     return listings;
//   }
// };

// // Thunk Action Creators
// export const fetchListing = (listingId) => async dispatch => {
//   const response = await csrfFetch(`/api/listings/${listingId}`);
//   const data = await response.json();
//   dispatch(receiveListing(data));
// };

// export const fetchListings = () => async (dispatch) => {
//   const response = await csrfFetch("/api/listings");
//   const data = await response.json();
//   dispatch(receiveListings(data));
// };

// // Listings Reducer
// const initialState = {
//   selectedCategory: '',
//   listings: {}
// };

// const listingsReducer = (state = initialState, action) => {
//   Object.freeze(state);
//   let newState = { ...state };

//   switch (action.type) {
//     case RECEIVE_LISTING:
//       newState.listings[action.payload.listing.id] = action.payload.listing;
//       return newState;
//     case RECEIVE_LISTINGS:
//       action.payload.forEach(
//         listing => (newState.listings[listing.id] = listing)
//       );
//       return newState;
//     case SET_SELECTED_CATEGORY:
//       newState.selectedCategory = action.payload;
//       return newState;
//     default:
//       return state;
//   }
// };

// export default listingsReducer;
