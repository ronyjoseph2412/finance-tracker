"use client";
import { useAppSelector } from "@/lib/hooks";
import { updatePopUpComponent, updatePopUpState } from "@/lib/popupSlice";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";

export const AddTransaction = () => {
  const dispatch = useDispatch();
  const { popUpState } = useAppSelector((state) => state.popupReducer);
  return (
    <Button
      variant="contained"
      onClick={() => {
        dispatch(updatePopUpState(true));
        dispatch(updatePopUpComponent(<div>Hi</div>));
      }}
    >
      Add Transaction
    </Button>
  );
};
