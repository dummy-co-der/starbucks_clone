import { createSlice } from "@reduxjs/toolkit";
import bestsellerdata from "@/Data/Bestsellerdata";
import merchandisedata from "@/Data/MerchandiseData";
export const MerchandiseSlice = createSlice({
  name: "merchandise",
  initialState: {
    merchandise: merchandisedata,
  },
  reducers: {
    Filtermerchandisedata: (state, action) => {
      const key = action.payload;
      state.merchandise = merchandisedata.filter(
        (merchandise) => merchandise.type === key
      );
    },
  },
});

export const { Filtermerchandisedata } = MerchandiseSlice.actions;
export const GetMerchandiseData = (state) => state.merchandise.merchandise;
export default MerchandiseSlice.reducer;
