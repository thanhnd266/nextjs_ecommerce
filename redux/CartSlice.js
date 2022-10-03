import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../constant/const";

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState.cart,
  
  reducers: {
    addCart: (state, action) => {
      state = [...state, action.payload];
      let arr  = [...new Set(state)]
      return arr;
    },
    fillQuantity: (state, action) => {
        state.map(item => {
            if(item._id === action.payload.id) {
                item.quantity = action.payload.quantity;
            }
        })

        return state;
    },
    increase: (state, action) => {
        state.map((item )=> {
            if(item._id === action.payload._id) {
                item.quantity += 1;
            }
        })
        return state;
    },
    decrease: (state, action) => {
        state.map((item )=> {
            if(item._id === action.payload._id) {
                if(item.quantity <= 1) {
                    return item.quantity = 1;
                }
                item.quantity -= 1;
            }
        })
        return state;
    },

  },
});

export default cartSlice.reducer;
export const { addCart, fillQuantity, increase, decrease } = cartSlice.actions;
