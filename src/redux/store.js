import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // Adjust if your reducers are in a different location


const store = configureStore({
  reducer: rootReducer,
  // Add any middleware or devTools configuration if needed
});

export default store;
