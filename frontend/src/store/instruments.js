const LOAD = "instrument/load"

export const getInstrumentTypes = () => async dispatch => {
    
}

const instrumentReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD: {
            const allInstruments = {};
            action.list.forEach(instruments => {
                allInstruments[instrument.id] = instrument;
            });
            return {
                ...allInstruments,
                ...state,
                list: sortList(action.list)
            };
        }
        default:
            return state;
    }
}

export default instrumentReducer;
