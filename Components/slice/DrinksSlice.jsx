import { createSlice } from "@reduxjs/toolkit"
import bestsellerdata from "@/Data/Bestsellerdata"
import drinksdata from "@/Data/DrinksData";
export const DrinkSlice = createSlice({
  name: 'drink',
  initialState: {
    drinks:drinksdata
  },
  reducers: {
    Filterdata: (state, action) => {
        // console.log(action);
        const key = action.payload
        state.drinks = drinksdata.filter((drink) => drink.type === key);
      },
  }
})

export const { Filterdata } = DrinkSlice.actions;
export const GetDrinksData = state=>state.drink.drinks;
export default DrinkSlice.reducer