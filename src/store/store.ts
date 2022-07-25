import { configureStore } from "@reduxjs/toolkit";
import postsReduser from "./reducers/postsReduser";

export const store = configureStore({
  reducer: {
    posts: postsReduser,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
