
const RECEIVE_HOST = 'listings/RECEIVE_HOST';

export const receiveHost = (host) => {
    return {
        type: RECEIVE_HOST,
        payload: host
    }
}

const hostReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = {...state};

    switch (action.type) {
        case RECEIVE_HOST:
            newState[action.payload.id] = action.payload;
            return newState;
        default:
            return state;
    }
}

export default hostReducer;