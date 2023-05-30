import { createSlice } from "@reduxjs/toolkit"
import bestsellerdata from "@/Data/Bestsellerdata"
import readytoeatdata from "@/Data/ReadytoeatData"
export const ReadytoeatSlice = createSlice({
  name: 'readytoeat',
  initialState: {
    readytoeat:readytoeatdata
  },
  reducers: {
    Filterreadytoeatdata: (state, action) => {
        // console.log(action);
        const key = action.payload
        state.readytoeat = readytoeatdata.filter((readytoeat) => readytoeat.type === key);
      },
  }
})

export const { Filterreadytoeatdata } = ReadytoeatSlice.actions;
export const GetreadytoeatData = state=>state.readytoeat.readytoeat;
export default ReadytoeatSlice.reducer