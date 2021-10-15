import { csrfFetch } from "./csrf";

const LOAD = "review/LOAD_ALL_REVIEWS"
const LOAD_ONE_REVIEW = "review/LOAD_ONE_REVIEW"
const ADD_REVIEW = "review/ADD_REVIEW"
const DELETE_REVIEW = "review/DELETE_REVIEW"
const EDIT_REVIEW = "review/EDIT_REVIEW"

const loadAllReviews = getAllReviews => ({
    type: LOAD,
    getAllReviews
})

const loadOneReview = loadOneReview => ({
    type: LOAD_ONE_REVIEW,
    loadOneReview
})

const addOneReview = addReview => ({
    type: ADD_REVIEW,
    addReview
})

const removeReview = deleteReview => ({
    type: DELETE_REVIEW,
    deleteReview
})

const editReview = editReview => ({
    type: EDIT_REVIEW,
    editReview
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

    if (response.ok) {
        const data = await response.json();
        dispatch(loadAllReviews(data));
        return data;
    }
}

export const createReview = (review, id) => async dispatch => {
    const response = await csrfFetch(`/api/reviews/${id}/new`, {
        method: "POST",
        body: JSON.stringify(review)
    })

    if (response.ok) {
        const data = await response.json();
        dispatch(addOneReview(data))
        return data
    }
}

export const getSingleReview = (id) => async dispatch => {
    const response = await fetch(`/api/reviews/${id}`)
    if (response.ok) {
        const data = await response.json();
        dispatch(loadOneReview(data))
    console.log("::::::::response::::::", data)

        return data;
    }
}

export const editSingleReview = (review) => async dispatch => {
    const response = await csrfFetch(`/api/reviews/${review.id}/edit`, {
        method: "PUT",
        body: JSON.stringify(review)
    });
    if (response.ok) {
        const data = await response.json();
        dispatch(editReview(data))
        return data;
    }
}

export const deleteReview = (id) => async dispatch => {
    const response = await csrfFetch(`/api/reviews/${id}`, {
        method: "DELETE"
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(removeReview(data))
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

        case LOAD_ONE_REVIEW: {
            return {
                ...state,
                loadOneReview: action.loadOneReview
            }
        }

        case ADD_REVIEW: {
            return {
                ...state,
                addReview: action.addReview
            }
        }

        case DELETE_REVIEW: {
            return {
                ...state,
                deleteReview: action.deleteReview
            }
        }

        case EDIT_REVIEW: {
            return {
                ...state,
                editReview: action.editReview
            }
        }
        default:
            return state;
    }

}

export default reviewReducer;
