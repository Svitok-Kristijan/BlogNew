import {combineReducers, createStore} from "redux";
import newsReducer from "./newsReducer";

const rootReducer = combineReducers({
  news: newsReducer,
});

const store = createStore(rootReducer);

export default store;
