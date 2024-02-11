import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userData: null,
        showLoginSignupButton: true
    },
    reducers: {
        addUser: (state, action) => {
            state.userData = action.payload;

        },
        removeUser: (state, action) => {
            state.userData = null;

        },
        dontShowButton: (state, action) => {
            state.showLoginSignupButton = !state.showLoginSignupButton;
        }
    },
})

export const { addUser, removeUser, dontShowButton } = userSlice.actions;

export default userSlice.reducer;
