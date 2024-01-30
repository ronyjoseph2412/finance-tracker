import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  firstName: string | null;
  lastName: string | null;
  username: string | null;
  isAuth: boolean;
}

const initialState: UserState = {
  firstName: null,
  lastName: null,
  username: null,
  isAuth: false,
};

const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateIsAuthenticated(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
    updateUserDetails(state, action: PayloadAction<{
        firstName: string;
        lastName: string;
        username: string;
    }>) {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.username = action.payload.username;
      state.isAuth = true;
    },
    resetUserDetails(state) {
      state.firstName = null;
      state.lastName = null;
      state.username = null;
      state.isAuth = false;
    },
  },
});

export const { updateIsAuthenticated, updateUserDetails, resetUserDetails } =
  usersSlice.actions;
export default usersSlice.reducer;
