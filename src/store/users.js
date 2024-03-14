import { createSlice } from '@reduxjs/toolkit';
const initialUserState = {
    users: ''
};
const usersSlice = createSlice({
    name: 'users',
    initialState: initialUserState,
    reducers: {
        setUser(state, action) {
            state.users = action.payload;
        }
    }
});
export const userAction = usersSlice.actions;
export default usersSlice.reducer;
