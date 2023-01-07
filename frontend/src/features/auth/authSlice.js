import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {authService} from "./authService"

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// register
export const register = createAsyncThunk("auth/register", async (user, thunkAPI) => {
  // console.log(user);
  // console.log(thunkAPI.getState());
  // console.log(thunkAPI.dispatch(anyImportedMethod()));
  try{
    console.log(user);
    return await authService.register(user);

  } catch(error) {
      const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()    
      console.log(message);
      return thunkAPI.rejectWithValue(message);
  }
});

// login
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  console.log(user);
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false
      state.isLoading = false
      state.isSuccess = false
      state.message = ""
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true
      })

      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false
        // state.isError = false
        state.isSuccess = true
        state.user = action.payload
      })

      .addCase(register.rejected, (state, action) => {
        state.isError = true
        state.isLoading = false
        state.message = action.payload
        state.user = null
      })
  },
});

export const {reset} = authSlice.actions
export default authSlice.reducer;
