import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import sessionReducer from './session';
import instrumentReducer from "./instruments";
import reviewReducer from "./reviews";
import userReducer from "./users";

const appReducer = combineReducers({
  session: sessionReducer,
  instruments: instrumentReducer,
  reviews: reviewReducer,
  users: userReducer
});

const rootReducer = (state, action) => {
  if (action.type === "LOAD_ONE_INSTRUMENT") {
    state = undefined;
  }

  return appReducer(state, action)
}

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
