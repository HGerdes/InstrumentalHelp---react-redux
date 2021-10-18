import { csrfFetch } from './csrf';

const LOAD = "instrument/LOAD_ALL_INSTRUMENTS";
const LOAD_ONE_INSTRUMENT = "instrument/LOAD_ONE_INSTRUMENT";
const ADD_INSTRUMENT = "instrument/ADD_INSTRUMENT";
const EDIT_INSTRUMENT = "instrument/EDIT_INSTRUMENT";
const LOAD_TYPES = "instrument/LOAD_TYPES";
const LOAD_MANUFACTURERS = "instrument/LOAD_MANUFACTURERS";
const DELETE_INSTRUMENT = "instrument/DELETE_INSTRUMENT";

const loadAllInstruments = getAllInstruments => ({
    type: LOAD,
    getAllInstruments,
});

const loadOneInstrument = getInstrumentDetail => ({
    type: LOAD_ONE_INSTRUMENT,
    getInstrumentDetail
})

const addOneInstrument = addInstrument => ({
    type: ADD_INSTRUMENT,
    addInstrument,
});

const editInstrument = editInstrument => ({
    type: EDIT_INSTRUMENT,
    editInstrument,
});

const loadTypes = getTypes => ({
    type: LOAD_TYPES,
    getTypes,
})

const loadManufacturers = getManufacturers => ({
    type: LOAD_MANUFACTURERS,
    getManufacturers,
})

const removeInstrument = deleteInstrument => ({
    type: DELETE_INSTRUMENT,
    deleteInstrument,
});


//thunk action creater
export const getInstruments = () => async dispatch => {
    const response = await fetch("/api/instruments");

    if (response.ok) {
        const instruments = await response.json();
        dispatch(loadAllInstruments(instruments));
        return instruments;
    }
}

export const getInstrumentDetail = (id) => async dispatch => {
    const response = await fetch(`/api/instruments/${id}`);

    if (response.ok) {
        const instrumentDetail = await response.json();
        dispatch(loadOneInstrument(instrumentDetail))
    }
}

export const getInstrumentTypes = () => async dispatch => {
    const response = await fetch("/api/instruments/type");

    if (response.ok) {
        const types = await response.json();
        dispatch(loadTypes(types))
        return types;
    }
}

export const getInstrumentManufacturers = () => async dispatch => {
    const response = await fetch("/api/instruments/manufacturer");

    if (response.ok) {
        const manufacturers = await response.json();
        dispatch(loadManufacturers(manufacturers))
        return manufacturers;
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

export const editSingleInstrument = (instrument) => async dispatch => {
    console.log("instrument:   ", instrument)
    const response = await csrfFetch(`/api/instruments/${instrument.id}/edit`, {
        method: "PATCH",
        body: JSON.stringify(instrument)

    });
    console.log("response:   ", response)
    if (response.ok) {
        const data = await response.json();
        dispatch(editInstrument(data))
        return data;
    }
}

export const deleteInstrument = (id) => async dispatch => {
    const response = await csrfFetch(`/api/instruments/${id}/delete`, {
        method: "DELETE"
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(removeInstrument(data));
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

        case LOAD_ONE_INSTRUMENT: {
                return {
                ...state,
                getInstrumentDetail: action.getInstrumentDetail
            }
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

        case EDIT_INSTRUMENT: {
            // newState = {...state};
            // const editInstrument = newState.find((instrument) => instrument.id === action.editInstrument.id)
            return {
                ...state,
                editInstrument: action.editInstrument
            }
        }

        case DELETE_INSTRUMENT: {
            return {
                ...state,
                deleteInstrument: action.deleteInstrument
            }
        }
        default:
            return state;
    }
}

export default instrumentReducer;
