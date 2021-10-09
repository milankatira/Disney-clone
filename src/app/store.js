import { configureStore } from '@reduxjs/toolkit';
//import counterReducer from '../features/counter/counterSlice';
import moviesReducer from '../features/movies/movieSlice'
export const store = configureStore({
  reducer: {
    movie: moviesReducer,
  },
});
