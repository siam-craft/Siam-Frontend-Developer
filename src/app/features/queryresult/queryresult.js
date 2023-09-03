import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchQueryData from '../../../utils/fetchQueryData';

// Action
export const fetchData = createAsyncThunk('fetchData', async (result) =>
  fetchQueryData(result),
);
const initialState = { isLoading: false, data: null, isError: false };

export const queryresultSlice = createSlice({
  name: 'queryresult',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      console.log('Error', action.payload);
      state.isError = true;
    });
  },
});

export default queryresultSlice.reducer;
