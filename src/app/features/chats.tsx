import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IMessage {
    from: string;
    text: string;
    createdAt: string;
}

interface IUser {
    id: string;
    name: string;
}

interface IChat {
    user: IUser;
    messages: IMessage[];
}

interface IInitialState {
    chats: IChat[];
    activeChat: IUser;
}

const initialState: IInitialState = {
    chats: [],
    activeChat: {
        id: "",
        name: ""
    }
}

export const chatsSlice = createSlice({
    name: "chats",
    initialState,
    reducers: {
        addChat: (state, action: PayloadAction<IChat>) => {
            const chatIndex = state.chats.findIndex((chat) => chat.user.id === action.payload.user.id)
            if (chatIndex !== -1) {
                
                state.chats[chatIndex] = action.payload
                console.log("i'm here now")
            }
            else {
                state.chats.push(action.payload)
            }
        },
        setActiveChat: (state, action: PayloadAction<IUser>) => {
            state.activeChat = action.payload
        },
    }
})

export const { addChat, setActiveChat } = chatsSlice.actions

export default chatsSlice.reducer