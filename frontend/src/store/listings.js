import csrfFetch from "./csrf.js";

// // Action Constants
// const RECEIVE_LISTING = 'listings/RECEIVE_LISTING';
// const RECEIVE_LISTINGS = 'listings/RECEIVE_LISTINGS';

// // Action Creators
// export const receiveListing = (listing) => ({
//     type: RECEIVE_LISTING,
//     payload: listing
// });

// export const receiveListings = (listings) => ({
//     type: RECEIVE_LISTINGS,
//     payload: listings 
// })


// // Selectors 
// export const getListing = (listingId) => (state) => {
//     if (state.listings) {
//         return (state.listings[listingId])
//     } else {
//         return null 
//     }
// }

// export const getListings = (state) => {
//     if (state.listings) {
//         return Object.values(state.listings)
//     } else {
//         return []
//     }
// }

// export const filteredListings = (category) => state => {
//     let filteredListings = Object.values(state.listings).filter(
//         (listing) => listing.category === category
//       );
    
//       return filteredListings;
// }

// // Thunk Action Creators
// export const fetchListing = (listingId) => async dispatch => {
//     const response = await csrfFetch(`/api/listings/${listingId}`);
//     // debugger 
//     const data = await response.json();
//     dispatch(receiveListing(data));
//     // return response;
// }

// export const fetchListings = () => async (dispatch) => {
//     const response = await csrfFetch("/api/listings");

//     const data = await response.json();
//     dispatch(receiveListings(data));
//     // return response;
// }



// // Listings Reducer

// const listingsReducer = (state = {}, action) => {
//     Object.freeze(state);
//     let newState = {...state};

//     switch (action.type) {
//         case RECEIVE_LISTING:
//             // debugger 
//             newState[action.payload.listing.id] = action.payload.listing;
//             return newState;
//         case RECEIVE_LISTINGS:
//             // debugger;
//             action.payload.forEach(
//                 listing => {newState[listing.id] = listing}
//             )
//             // debugger;
//             return newState;
//         default:
//           return state;
//       }
// }

// export default listingsReducer;

 // Jiamin's recommendation

import { receiveHost } from "./host.js";

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

export const filteredListings = (category) => state => {
    let filteredListings = Object.values(state.listings).filter(
        (listing) => listing.category === category
      );
    
      return filteredListings;
}

// Thunk Action Creators
export const fetchListing = (listingId) => async dispatch => {
    const response = await csrfFetch(`/api/listings/${listingId}`);
    // debugger 
    const data = await response.json();
    dispatch(receiveListing(data.listing));
    dispatch(receiveHost(data.host));
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
            newState[action.payload.id] = action.payload;
            return newState;
        case RECEIVE_LISTINGS:
            // debugger;
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

