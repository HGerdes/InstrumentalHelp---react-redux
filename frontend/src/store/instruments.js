import { csrfFetch } from './csrf';

const LOAD = "instrument/LOAD_ALL_INSTRUMENTS";
const ADD_INSTRUMENT = "instrument/ADD_INSTRUMENT";
const LOAD_TYPES = "instrument/LOAD_TYPES";
const LOAD_MANUFACTURERS = "instrument/LOAD_MANUFACTURERS"

const loadAllInstruments = getAllInstruments => ({
    type: LOAD,
    getAllInstruments,
});

const addOneInstrument = addInstrument => ({
    type: ADD_INSTRUMENT,
    addInstrument,
});

const loadTypes = getTypes => ({
    type: LOAD_TYPES,
    getTypes,
})

const loadManufacturers = getManufacturers => ({
    type: LOAD_MANUFACTURERS,
    getManufacturers,
})

//thunk action creater
export const getInstruments = () => async dispatch => {
    const response = await fetch("/api/instruments");
    if (response.ok) {
        const instruments = await response.json();
        dispatch(loadAllInstruments(instruments));
        return instruments;
    }
}

export const getInstrumentTypes = () => async dispatch => {
    const response = await fetch("/api/instruments/type");

    if (response.ok) {
        const types = await response.json();
        dispatch(loadTypes(types))
    }
}

export const getInstrumentManufacturers = () => async dispatch => {
    const response = await fetch("/api/instruments/manufacturer");

    if (response.ok) {
        const manufacturers = await response.json();
        dispatch(loadManufacturers(manufacturers))
    }
}

export const createInstrument = (instrument) => async dispatch => {
    const response = await csrfFetch("/api/instruments/new", {
        method: "POST",
        // headers: {"Content-Type": "application/json"},
        body: JSON.stringify(instrument)
    })
    if (response.ok) {
        const data = await response.json();
        dispatch(addOneInstrument(data))
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

        case LOAD_TYPES: {
            return {
                ...state,
                getTypes: action.getTypes
            }
        }

        case LOAD_MANUFACTURERS: {
            return {
                ...state,
                getManufacturers: action.getManufacturers
            }
        }

        case ADD_INSTRUMENT: {
            return {
                ...state,
                addInstrument: action.addInstrument
            }
        }
        default:
            return state;
    }
}

export default instrumentReducer;
