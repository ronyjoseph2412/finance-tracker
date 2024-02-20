"use client";
import { useAppSelector } from "@/lib/hooks";
import { updatePopUpComponent, updatePopUpState } from "@/lib/popupSlice";
import { useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";

import { Button, TextField, MenuItem } from "@mui/material";
import styles from "./AddTransaction.module.css";
import { addExpense } from "@/services/addExpense";
import staticData from "@/staticData";
import { createNewBudget } from "@/services/createNewBudget";

export const AddTransaction = ({ token, fields, content }) => {
  const dispatch = useDispatch();
  const { popUpState } = useAppSelector((state) => state.popupReducer);
  const formRef = useRef(null);

  const handleSubmit = async () => {
    const formValues: any = {};
    fields.forEach((field) => {
      formValues[field.key] = formRef.current[field.key]?.value;
    });
    if (content.heading === "Expense Details") {
      const date = new Date(formValues.date);
      const formattedDate = `${
        date.getMonth() + 1
      }/${date.getDate()}/${date.getFullYear()}`;
      const Formdata = {
        date: formattedDate,
        payee: formValues.payee,
        note: formValues.note,
        category: formValues.category,
        amount: parseFloat(formValues.amount),
        bankName: formValues.bankName,
      };

      const response = await addExpense(token, Formdata);
      if (response?.username) {
        dispatch(updatePopUpState(false));
        window.location.reload();
      } else {
        window.alert("Error in adding transaction");
      }
    } else if (content.heading === "Set a new Budget") {
      const date = new Date(formValues.date);
      const formattedDate = `${
        date.getMonth() + 1
      }/${date.getDate()}/${date.getFullYear()}`;
      const Formdata = {
        date: formattedDate,
        goal: formValues.goal,
        requiredAmount: parseFloat(formValues.requiredAmount),
      };

      const response = await createNewBudget(token, Formdata);
      if (response?.username) {
        dispatch(updatePopUpState(false));
        window.location.reload();
      } else {
        window.alert("Error in adding transaction");
      }
    }
  };

  return (
    <Button
      variant="contained"
      onClick={() => {
        dispatch(updatePopUpState(true));
        dispatch(
          updatePopUpComponent(
            <div className={styles.Wrapper}>
              <div className={styles.HeadingWrapper}>{content.heading}</div>
              <form ref={formRef}>
                {fields.map((field) => (
                  <div key={field.key} className={styles.Field}>
                    <div>{field.name}</div>
                    {field.type === "input" ? (
                      <TextField
                        type="text"
                        name={field.key}
                        sx={{ width: "100%", marginBottom: "10px" }}
                      />
                    ) : field.type === "calendar" ? (
                      <TextField
                        type="date"
                        name={field.key}
                        sx={{ width: "100%", marginBottom: "10px" }}
                      />
                    ) : field.type === "select" ? (
                      <TextField
                        select
                        name={field.key}
                        sx={{ width: "100%", marginBottom: "10px" }}
                      >
                        {staticData.currentUserBankAccounts.map((bank) => (
                          <MenuItem key={bank.name} value={bank.name}>
                            {bank.name}
                          </MenuItem>
                        ))}
                      </TextField>
                    ) : null}
                  </div>
                ))}
                <Button variant="contained" onClick={handleSubmit}>
                  Submit
                </Button>
              </form>
            </div>
          )
        );
      }}
    >
      {content.button}
    </Button>
  );
};
