const LOAD = "instrument/LOAD_ALL_INSTRUMENTS"

const load = list => ({
    type: LOAD,
    list,
});

//thunk action creater
export const getInstruments = () => async dispatch => {
    const response = await fetch("/api/instruments");

    if (response.ok) {
        const list = await response.json();
        dispatch(load(list));
        return list;
    }
}


const initialState = {};

const sortList = (list) => {
    return list.sort((instrumentA, instrumentB) => {
      return instrumentA.id - instrumentB.id;
    }).map((instrument) => instrument);
  };

const instrumentReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD: {
            const allInstruments = {};
            action.list.forEach(instrument => {
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
