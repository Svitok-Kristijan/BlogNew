import {combineReducers, createStore} from "redux";
import newsReducer from "./newsReducer";
import movieReducer from "./movieReducer";
import visibilityReducer from "./visibilityReducer";
import navbarVisibilityReducer from "./navBarReducer";
const rootReducer = combineReducers({
  news: newsReducer,
  movie: movieReducer,
  movieVisibility: visibilityReducer,
  navbarVisibility: navbarVisibilityReducer,
});

const store = createStore(rootReducer);

export default store;
