import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
  counters: 0,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addData: (state, action) => {
      const data = action.payload;
      // console.log(data);
      const id = data.title;
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
    deleteData:(state,action)=>{
         const data = action.payload;
         const id = data.title;
         state.counters--;
         state.data[id].counter--;
         const qty = state.data[id].counter;
         if(qty==0){
            delete(state.data[id])
         }
    }
  },
});

export const { addData,deleteData } = CartSlice.actions;
export const GetCartData = (state) => state.cart;
export default CartSlice.reducer;
