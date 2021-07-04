import { configureStore, applyMiddleware, compose } from "@reduxjs/toolkit";
import rootReducer from "../reducers/rootReducer";

export default configureStore({ reducer: rootReducer });
