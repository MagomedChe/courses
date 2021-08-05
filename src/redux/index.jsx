import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { coursesReducer } from "./coursesReducer";
import { categoriesReducer } from "./categoriesReducer";
import { auth } from '../components/Authorization/authReducer'

const { createLogger } = require("redux-logger");
const logger = createLogger({
  diff: true,
  collapsed: true,
});

const rootReducer = combineReducers({
  courses: coursesReducer,
  categories: categoriesReducer,
  auth: auth
});

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
