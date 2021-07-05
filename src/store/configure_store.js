import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers/rootReducer";

// Configure Redux store
// Middleware should be applied here if used
export default configureStore({ reducer: rootReducer });
