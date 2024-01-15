import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PopUpState {
  popUpComponent: React.ReactNode | null;
  popUpState: boolean;
  isFullScreen: boolean;
}

const initialState: PopUpState = {
  popUpComponent: null,
  popUpState: false,
  isFullScreen: false,
};

const popUpSlice = createSlice({
  name: "popUp",
  initialState,
  reducers: {
    updatePopUpComponent: (
      state,
      action: PayloadAction<React.ReactNode | null>
    ) => {
      state.popUpComponent = action.payload;
    },
    updatePopUpState: (state, action: PayloadAction<boolean>) => {
      state.popUpState = action.payload;
    },
    updatePopUpFullScreen: (state, action: PayloadAction<boolean>) => {
      state.isFullScreen = action.payload;
    },
  },
});

export const { updatePopUpComponent, updatePopUpState, updatePopUpFullScreen } =
  popUpSlice.actions;
export default popUpSlice.reducer;
