import { configureStore } from '@reduxjs/toolkit';
import DrinkReducer from './store/slice/DrinksSlice'

const store = configureStore({
  reducer: {
    drink: DrinkReducer,
  },
});

export default store;