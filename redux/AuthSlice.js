import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../contant/const';

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState.auth,
    reducers: {
        AUTH: (state, action) => {
            return {
                ...state,
                auth: action.payload,
            }
        }
    }
});

export default authSlice.reducer;