import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { socketReducer, LogReducer } from "./reducer/reducer";

const reducer = combineReducers({
  socketReducer: socketReducer,
  LogReducer: LogReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
