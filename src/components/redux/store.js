import { configureStore } from '@reduxjs/toolkit';
import userReducer from './redux'; 

const store = configureStore({
  reducer: {
    result: userReducer, 
  },
});

export default store;