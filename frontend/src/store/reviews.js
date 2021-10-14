import { csrfFetch } from "./csrf";

const LOAD = "review/LOAD_ALL_REVIEWS"

const loadAllReviews = getAllReviews => ({
    type: LOAD,
    getAllReviews
})

export const getReviews = () => async dispatch => {
    const response = await fetch("/api/reviews")

    if (response.ok) {
        const reviews = await response.json();
        dispatch(loadAllReviews(reviews));
        return reviews;
    }
}

const initialState = {};

const reviewReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD: {
            newState = Object.assign({}, state) //assign current state to newState
            newState.getAllReviews = action.getAllReviews; //run getAllInstruments on newState
            return newState;
        }
    }
}

export default reviewReducer;
