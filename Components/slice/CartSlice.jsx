import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {},
  counters: 0,
};

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addData: (state, action) => {
        const data  = action.payload;
        console.log(data);
        const id = data.title; // Use the title as the unique identifier
        const existingData = state.data[id];
        state.counters++;
        if (!existingData) {
          state.data[id] = {
            data,
            counter: 1,
          };
        } else {
          state.data[id].counter++;
        }
      },
  },
});

export const { addData } = CartSlice.actions;
export const GetCartData = state=>state.cart;
export default CartSlice.reducer;