import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { coursesReducer } from "../components/courses/coursesReducer";
import { categoriesReducer } from "../components/categories/categoriesReducer";
import { favoritesReducer } from "../components/favorites/favoritesReducer";
import { auth } from "../components/Authorization/authReducer";
import { compare } from "../components/compare/compareReducer";
const { createLogger } = require("redux-logger");
const logger = createLogger({
  diff: true,
  collapsed: true,
});

const rootReducer = combineReducers({
  courses: coursesReducer,
  categories: categoriesReducer,
  favorites: favoritesReducer,
  compare: compare,
  auth: auth,
});

let preloadedState;

if (localStorage.getItem("favorites") !== null) {
  preloadedState = {
    favorites: JSON.parse(localStorage.getItem("favorites")),
  };
}
if (localStorage.getItem("compare") !== null) {
  preloadedState = {
    compare: JSON.parse(localStorage.getItem("compare")),
  };
}

export const store = createStore(
  rootReducer,
  preloadedState,
  applyMiddleware(thunk, logger)
);

store.subscribe(() => {
  localStorage.setItem("favorites", JSON.stringify(store.getState().favorites));
  localStorage.setItem("compare", JSON.stringify(store.getState().compare));
});
localStorage.setItem("favorites", JSON.stringify(store.getState().favorites));
localStorage.setItem("compare", JSON.stringify(store.getState().compare));
