import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../constant/const';

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState.cart,
    reducers: {
        addCart: (state, action) => ([
            ...state,
            ...action.payload,
        ])
    }
});

export default cartSlice.reducer;
export const { addCart } = cartSlice.actions;