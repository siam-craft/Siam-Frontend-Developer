import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Action
export const fetchCapsules = createAsyncThunk('fetchCapsules', async () => {
  const response = await fetch('https://api.spacexdata.com/v4/capsules');
  return response.json();
});

const initialState = { isLoading: false, data: null, isError: false };

export const allcapsulesSlice = createSlice({
  name: 'allcapsule',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCapsules.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCapsules.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchCapsules.rejected, (state, action) => {
      console.log('Error', action.payload);
      state.isError = true;
    });
  },
});

export default allcapsulesSlice.reducer;
