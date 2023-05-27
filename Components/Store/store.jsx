import { configureStore } from '@reduxjs/toolkit';
import DrinkReducer from '../slice/DrinksSlice'
import ReadytoeatReducer from '../slice/ReadyToEat'
import CoffeeReducer from '../slice/CoffeeSlice'
import FoodReducer from '../slice/FoodsSlice'
import MerchandiseReducer from '../slice/MerchandiseSlice';
const store = configureStore({
  reducer: {
    drink: DrinkReducer,
    coffee:CoffeeReducer,
    readytoeat:ReadytoeatReducer,
    food:FoodReducer,
    merchandise:MerchandiseReducer,
  },
});

export default store;