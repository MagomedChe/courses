import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { coursesReducer } from "./coursesReducer";
import { categoriesReducer } from "./categoriesReducer";
import { auth } from "./authReducer";
import { favoritesReducer } from "./favoritesReducer";
const { createLogger } = require("redux-logger");
const logger = createLogger({
  diff: true,
  collapsed: true,
});

const rootReducer = combineReducers({
  courses: coursesReducer,
  categories: categoriesReducer,
  favorites: favoritesReducer,
  auth: auth,
});

let preloadedState;

if (localStorage.getItem("favorites") !== null) {
  preloadedState = {
    favorites: JSON.parse(localStorage.getItem("favorites")),
  };
}

export const store = createStore(
  rootReducer,
  preloadedState,
  applyMiddleware(thunk, logger)
);

store.subscribe(() => {
  localStorage.setItem("favorites", JSON.stringify(store.getState().favorites));
});
