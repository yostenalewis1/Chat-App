import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userSlice";
import messagesSlice from "./features/messagesSlice";
import  chatsSlice from "./features/chats";

export const store = configureStore({
  reducer: {
    user: userSlice,
    messages: messagesSlice,
    chats: chatsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;