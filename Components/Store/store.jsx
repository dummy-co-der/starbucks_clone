import { configureStore } from '@reduxjs/toolkit';
import DrinkReducer from '../slice/DrinksSlice'
import ReadytoeatReducer from '../slice/ReadyToEat'
import CoffeeReducer from '../slice/CoffeeSlice'
const store = configureStore({
  reducer: {
    drink: DrinkReducer,
    coffee:CoffeeReducer,
    readytoeat:ReadytoeatReducer,
  },
});

export default store;