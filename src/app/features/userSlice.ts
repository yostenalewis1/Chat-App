import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IInitialState {
    name: string;  
}

const initialState: IInitialState = {
    name: ""
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload
        }
    }
})

export const { setName } = userSlice.actions

export default userSlice.reducer