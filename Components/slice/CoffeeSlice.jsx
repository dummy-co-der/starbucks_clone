import { createSlice } from "@reduxjs/toolkit"
import bestsellerdata from "@/Data/Bestsellerdata"
import drinksdata from "@/Data/DrinksData";
export const CoffeeSlice = createSlice({
  name: 'coffee',
  initialState: {
    coffee:drinksdata
  },
  reducers: {
    Filtercoffeedata: (state, action) => {
        // console.log(action);
        const key = action.payload
        state.coffee = drinksdata.filter((coffee) => coffee.type === key);
      },
  }
})

export const { Filtercoffeedata } = CoffeeSlice.actions;
export const GetCoffeeData = state=>state.coffee.coffee;
export default CoffeeSlice.reducer