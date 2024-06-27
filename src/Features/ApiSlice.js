import { , createSlice } from "@reduxjs/toolkit";

// Define the async thunk
export const getAllData = createAsyncThunk(
  "ApiSlice",
  async (args, { rejectWithValue }) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue("found a error");
    }
  }
);

const initialState = {
  users: [],
  loading: false,
  error: null,
};

// Create the slice
export const ApiSlice = createSlice({
  name: "ApiSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllData.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getAllData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Use action.error.message for error
      });
  },
});

export default ApiSlice.reducer;
