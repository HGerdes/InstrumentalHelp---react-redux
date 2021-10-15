import { csrfFetch } from "./csrf";

const LOAD = "review/LOAD_ALL_REVIEWS"
const LOAD_ONE_REVIEW = "review/LOAD_ONE_REVIEW"
const ADD_REVIEW = "review/ADD_REVIEW"
const DELETE_REVIEW ="review/DELETE_REVIEW"

const loadAllReviews = getAllReviews => ({
    type: LOAD,
    getAllReviews
})

const addOneReview = addReview => ({
    type: ADD_REVIEW,
    addReview
})

const removeReview = deleteReview => ({
    type: DELETE_REVIEW,
    deleteReview
})

export const getReviews = () => async dispatch => {
    const response = await fetch("/api/reviews")

    if (response.ok) {
        const reviews = await response.json();
        dispatch(loadAllReviews(reviews));
        return reviews;
    }
}

export const getReviewsForInstrument = (id) => async (dispatch) => {
    const response = await fetch(`/api/reviews/${id}`);
    console.log("this is the response: ",response);

    if (response.ok) {
        const data = await response.json();
        dispatch(loadAllReviews(data));
        return data;
    }
}

export const createReview = (review, id) => async dispatch => {
    console.log("review:::::: and id::::::", review, id)
    const response = await csrfFetch(`/api/reviews/${id}/new`, {
        method: "POST",
        body: JSON.stringify(review)
    })

    console.log("review:     :::", response)

    if (response.ok) {
        const data = await response.json();
        dispatch(addOneReview(data))
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

        case ADD_REVIEW: {
            return {
                ...state,
                addReview: action.addReview
            }
        }
        default:
            return state;
    }

}

export default reviewReducer;
