import { configureStore } from "@reduxjs/toolkit";
import currentUserReducer from "./reducers/user-reducers";
import bulletinReducer from "./reducers/bulletin-reducers";

export const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
    bulletin: bulletinReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
