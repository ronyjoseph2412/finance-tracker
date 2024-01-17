"use client";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useEffect, useState } from "react";
import styles from "./SelectComponent.module.css";
import { useDispatch } from "react-redux";
import { updateCurrentFilter } from "@/lib/transactionsSlice";
import { useUpdateTimestamps } from "@/lib/hooks/useTransactions";

const selectStyle = {
  fontWeight: "500",
  color: "#333" /* Hex code for black color */,
  "& .MuiSelect-select": {
    paddingTop: "1.3rem",
    paddingBottom: "1.3rem",
    paddingLeft: "2rem",
    color: "#888 !important" /* Hex code for grey color */,
    backgroundColor: "#fafafa" /* Hex code for grey color */,
    borderRadius: "0.8rem",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#ccc !important" /* Hex code for grey color */,
  },
  "& .MuiSelect-icon": {
    top: "calc(50% - 0.7rem)",
    right: "1rem",
    width: "1.3rem",
    height: "1.3rem",
  },
};

const menuStyle = {
  fontWeight: "500",
  color: "#333" /* Hex code for black color */,
  "&.Mui-selected": {
    backgroundColor: "#fff" /* Hex code for white color */,
  },
};

export type SelectComponentProps = { label: string; selectOptions: string[] };
export const SelectComponent: React.FC<SelectComponentProps> = ({
  label,
  selectOptions,
}) => {
  const dispatch = useDispatch();
  const handleTimestamps = useUpdateTimestamps();
  const [age, setAge] = useState(selectOptions[0]);

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  useEffect(() => {
    console.log("age", age);
    if (age === "Custom") {
      console.log("Custom");
      dispatch(updateCurrentFilter(age));
    } else {
      dispatch(updateCurrentFilter(age));
      handleTimestamps(age);
    }
  }, [age]);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          value={age}
          onChange={handleChange}
          name="year"
          // IconComponent={isCalendarIcon ? images.Calender : images.DownArrow}
          sx={selectStyle}
        >
          {selectOptions.map((data, index) => {
            return (
              <MenuItem key={index} value={data} sx={menuStyle}>
                {data}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectComponent;
