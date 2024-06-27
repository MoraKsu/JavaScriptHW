import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../reducers/tasksSlice';

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

export default store;
