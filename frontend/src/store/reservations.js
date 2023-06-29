import csrfFetch from "./csrf.js";

// Action Constants
const RECEIVE_RESERVATION = 'reservations/RECEIVE_RESERVATION';
const RECEIVE_RESERVATIONS = 'reservations/RECEIVE_RESERVATIONS';
const REMOVE_RESERVATION = 'reservations/REMOVE_RESERVATION';

// Action Creators
export const receiveReservation = (reservation) => ({
  type: RECEIVE_RESERVATION,
  payload: reservation
});

export const receiveReservations = (reservations) => {
    // debugger
    return {  
        type: RECEIVE_RESERVATIONS,
        payload: reservations
    }
};

export const removeReservation = (reservationId) => ({
  type: REMOVE_RESERVATION,
  payload: reservationId
});


// Selectors
export const getReservation = (reservationId) => (state) => state.reservations ? state.reservations[reservationId] : null;

export const getReservations = (state) => {
    // debugger
    return state.reservations ? Object.values(state.reservations) : [];
}
// Thunk Action Creators

export const fetchReservation = (reservationId) => async (dispatch) => {
    const response = await csrfFetch(`/api/reservations/${reservationId}`);
    const data = await response.json();
    dispatch(receiveReservation(data.reservation))
}

// export const fetchReservations = () => async (dispatch) => {
//     // debugger
//     const response = await csrfFetch('/api/reservations');
//     const data = await response.json();
//     dispatch(receiveReservations(data.reservations))
// }

export const fetchReservations = () => async (dispatch) => {
    // debugger
    const response = await csrfFetch('/api/reservations');
    if (response.ok) {
      const data = await response.json();
      dispatch(receiveReservations(data.reservations));
    }
};
  

export const createReservation = (reservation) => async (dispatch) => {

  const response = await csrfFetch(`/api/reservations`, 
  {
    method: "POST",
    body: JSON.stringify({reservation: reservation})
  }
  )
  if (response.ok) {
    const data = await response.json();
    dispatch(receiveReservation(data.reservation))
  } else {
    throw response
  }

  return response;
};

export const updateReservation = (reservation) => async (dispatch) => {

    const response = await csrfFetch(`/api/reservations/${reservation.id}`, 
    {
        method: "PATCH",
        body: JSON.stringify({reservation: reservation})
    }
    )
    if (response.ok) {
        const data = await response.json();
        dispatch(receiveReservation(data.reservation))
    } else {
        throw response
    }

    return response;
};

export const deleteReservation = (reservationId) => async (dispatch) => {
    const response = await csrfFetch(`/api/reservations/${reservationId}`, 
    {
        method: "DELETE",
    }
    )
    if (response.ok) {
        dispatch(removeReservation(reservationId))
    } else {
        throw response
    }

    return response;
};

// Reservations Reducer
const reservationsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = {...state};

    switch (action.type) {
        case RECEIVE_RESERVATION:
            newState[action.payload.id] = action.payload 
            return newState;
        case RECEIVE_RESERVATIONS:
            // debugger 
            // Object.keys(action.payload).forEach(reservation => {newState[reservation] = action.payload[reservation]})
            // return newState
            return { ...newState, ...action.payload }
        case REMOVE_RESERVATION:
            delete newState[action.payload];
            // delete newState[action.payload.id];
            return newState;
        default:
            return state;
    }
};

export default reservationsReducer;
