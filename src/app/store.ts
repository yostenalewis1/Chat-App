import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userSlice";
import messagesSlice from "./features/messagesSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    messages: messagesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;