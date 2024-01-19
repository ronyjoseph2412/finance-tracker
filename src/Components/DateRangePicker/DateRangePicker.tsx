"use client";
import styles from "./DateRangePicker.module.css";
import { Button } from "@mui/material";
import { useUpdateTimestamps } from "@/lib/hooks/useTransactions";
import { useDispatch } from "react-redux";
import { updateEndDate, updateStartDate } from "@/lib/transactionsSlice";
import { useAppSelector } from "@/lib/hooks";
import { updatePopUpState } from "@/lib/popupSlice";
import React, { useState } from "react";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import "@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export type DatePickerProps = {};
export const DatePicker: React.FC<DatePickerProps> = ({}) => {
  const [value, onChange] = useState<Value>([new Date(), new Date()]);
  const startDate = value && value[0] ? value[0].toLocaleString() : null;
  const endDate = value && value[1] ? value[1].toLocaleString() : null;

  const dispatch = useDispatch();
  const handleTimestamps = useUpdateTimestamps();

  return (
    <div className={styles.Wrapper}>
      <div className={styles.Heading}>Choose a date range</div>
      <DateRangePicker onChange={onChange} value={value} />
      <div className={styles.ButtonWrapper}>
        <Button
          variant="contained"
          onClick={() => {
            handleTimestamps(null, startDate, endDate);
            dispatch(updatePopUpState(false));
          }}
        >
          Apply
        </Button>
      </div>
    </div>
  );
};

export default DatePicker;
