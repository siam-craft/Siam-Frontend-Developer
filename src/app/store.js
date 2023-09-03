import { configureStore } from '@reduxjs/toolkit';
import dropdownSlice from './features/dropdown/dropdownSlice';
import allcapsulesSlice from './features/allcapsules/allcapsulesSlice';

const store = configureStore({
  reducer: {
    dropdown: dropdownSlice,
    allcapsule: allcapsulesSlice,
  },
});
export default store;
