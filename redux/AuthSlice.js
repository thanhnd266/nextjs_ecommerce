import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../constant/const';

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState.auth,
    reducers: {
        authAction: (state, action) => {
            return {
                ...state,
                auth: action.payload,
            }
        }
    }
});

export default authSlice.reducer;
export const { authAction } = authSlice.actions;