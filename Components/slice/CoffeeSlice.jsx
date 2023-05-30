import { createSlice } from "@reduxjs/toolkit"
import bestsellerdata from "@/Data/Bestsellerdata"
import coffeedata from "@/Data/CoffeeData"
export const CoffeeSlice = createSlice({
  name: 'coffee',
  initialState: {
    coffee:coffeedata
  },
  reducers: {
    Filtercoffeedata: (state, action) => {
        // console.log(action);
        const key = action.payload
        state.coffee = coffeedata.filter((coffee) => coffee.type === key);
      },
  }
})

export const { Filtercoffeedata } = CoffeeSlice.actions;
export const GetCoffeeData = state=>state.coffee.coffee;
export default CoffeeSlice.reducer