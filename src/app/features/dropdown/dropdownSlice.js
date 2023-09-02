import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filterName: '',
  types: {
    openDropdownStatus: false,
    dropdownItemValue: '',
  },
  status: {
    openDropdownStatus: false,
    dropdownItemValue: '',
  },
  review: {
    openDropdownStatus: false,
    dropdownItemValue: '',
  },
};

export const counterSlice = createSlice({
  name: 'dropdown',
  initialState,
  reducers: {
    openDropdown: (state, action) => {
      state[state.filterName].openDropdownStatus = action.payload;
    },
    dropdownItem: (state, action) => {
      state[state.filterName].dropdownItemValue = action.payload;
    },
    getFilterName: (state, action) => {
      state.filterName = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openDropdown, dropdownItem, getFilterName } =
  counterSlice.actions;

export default counterSlice.reducer;
