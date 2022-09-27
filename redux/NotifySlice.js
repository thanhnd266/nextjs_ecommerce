import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../constant/const';

const notifySlice = createSlice({
    name: 'notify',
    initialState: initialState.notify,
    reducers: {
        notifyAction: (state, action) => {
            return {
                ...state,
                notify: action.payload,
            }
        }
    }
})

export default notifySlice.reducer;
export const { notifyAction } = notifySlice.actions;