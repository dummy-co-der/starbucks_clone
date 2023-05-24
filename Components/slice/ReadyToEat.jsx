import { createSlice } from "@reduxjs/toolkit"
import bestsellerdata from "@/Data/Bestsellerdata"
import drinksdata from "@/Data/DrinksData";
export const ReadytoeatSlice = createSlice({
  name: 'readytoeat',
  initialState: {
    readytoeat:drinksdata
  },
  reducers: {
    Filterreadytoeatdata: (state, action) => {
        // console.log(action);
        const key = action.payload
        state.readytoeat = drinksdata.filter((readytoeat) => readytoeat.type === key);
      },
  }
})

export const { Filterreadytoeatdata } = ReadytoeatSlice.actions;
export const GetreadytoeatData = state=>state.readytoeat.readytoeat;
export default ReadytoeatSlice.reducer