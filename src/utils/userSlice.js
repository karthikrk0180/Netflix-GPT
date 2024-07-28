import { createSlice } from "@reduxjs/toolkit";

// Create a slice for user management
const userSlice = createSlice({
    name: 'user',
    initialState: null, // Initial state of the user
    reducers: {
        // Action to add a user
        addUser: (state, action) => {
            return action.payload; // Set the state to the user payload
        },
        // Action to remove a user
        removeUser: (state, action) => {
            return null; // Reset the state to null
        },
    },
});

// Export the reducer as the default export
export default userSlice.reducer;

// Export the actions for use in components
export const { addUser, removeUser } = userSlice.actions;
