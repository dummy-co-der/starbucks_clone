import { configureStore } from '@reduxjs/toolkit';
import DrinkReducer from '../slice/DrinksSlice'

const store = configureStore({
  reducer: {
    drink: DrinkReducer,
  },
});

export default store;