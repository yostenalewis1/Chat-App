import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IMessage {
    from: string;
    text: string;
    createdAt: string;
}

interface IInitialState {
    messages: IMessage[];
}

const initialState: IInitialState = {
    messages: []
}

export const messagesSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addMessage: (state, action: PayloadAction<IMessage>) => {
            state.messages.push(action.payload)
        }
    }
})

export const { addMessage } = messagesSlice.actions

export default messagesSlice.reducer