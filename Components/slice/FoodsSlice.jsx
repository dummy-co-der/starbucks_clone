import { createSlice } from "@reduxjs/toolkit"
import bestsellerdata from "@/Data/Bestsellerdata"
import foodsdata from "@/Data/FoodData"
export const FoodSlice = createSlice({
  name: 'food',
  initialState: {
    food:foodsdata
  },
  reducers: {
    Filterfooddata: (state, action) => {
        // console.log(action);
        const key = action.payload
        state.food = foodsdata.filter((food) => food.type === key);
      },
  }
})

export const { Filterfooddata } = FoodSlice.actions;
export const GetFoodData = state=>state.food.food;
export default FoodSlice.reducer