import { createSlice } from "@reduxjs/toolkit"
import bestsellerdata from "@/Data/Bestsellerdata"
import drinksdata from "@/Data/DrinksData";
export const MerchandiseSlice = createSlice({
  name: 'merchandise',
  initialState: {
    merchandise:drinksdata
  },
  reducers: {
    Filtermerchandisedata: (state, action) => {
        // console.log(action);
        const key = action.payload
        state.merchandise = drinksdata.filter((merchandise) => merchandise.type === key);
      },
  }
})

export const { Filtermerchandisedata } = MerchandiseSlice.actions;
export const GetMerchandiseData = state=>state.merchandise.merchandise;
export default MerchandiseSlice.reducer