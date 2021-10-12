import { csrfFetch } from './csrf';

const LOAD = "instrument/LOAD_ALL_INSTRUMENTS"

const load = getAllInstruments => ({
    type: LOAD,
    getAllInstruments,
});

//thunk action creater
export const getInstruments = () => async dispatch => {
    const response = await fetch("/api/instruments");
    console.log(response)
    if (response.ok) {
        const instruments = await response.json();
        dispatch(load(instruments));
        return instruments;
    }
}


const initialState = {};

const instrumentReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD: { //load is the action
            newState = Object.assign({}, state) //assign current state to newState
            newState.getAllInstruments = action.getAllInstruments; //run getAllInstruments on newState
            return newState;
        }
        default:
            return state;
    }
}

export default instrumentReducer;
