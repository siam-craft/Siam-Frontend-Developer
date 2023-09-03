import { configureStore } from '@reduxjs/toolkit';
import dropdownReducer from './features/dropdown/dropdownSlice';
import allcapsulesReducer from './features/allcapsules/allcapsulesSlice';
import queryresultReducer from './features/queryresult/queryresult';

const store = configureStore({
  reducer: {
    dropdown: dropdownReducer,
    allcapsule: allcapsulesReducer,
    queryresult: queryresultReducer,
  },
});
export default store;
