import { configureStore } from '@reduxjs/toolkit';
import dropdownSlice from './features/dropdown/dropdownSlice';

const store = configureStore({
  reducer: {
    dropdown: dropdownSlice,
  },
});
export default store;
