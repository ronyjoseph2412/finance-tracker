import staticData from "@/staticData";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface transactionsState {
  currentFilter: string;
  transactions: [] | null;
  startDate: number | null;
  endDate: number | null;
}

const initialState: transactionsState = {
  currentFilter: staticData.transactionsFilterOptions[0],
  transactions: null,
  startDate: null,
  endDate: null,
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    updateCurrentFilter: (state, action: PayloadAction<string>) => {
      state.currentFilter = action.payload;
    },
    updateTransactions: (state, action: PayloadAction<[] | null>) => {
      state.transactions = action.payload;
    },
    updateStartDate: (state, action: PayloadAction<number | null>) => {
      state.startDate = action.payload;
    },
    updateEndDate: (state, action: PayloadAction<number | null>) => {
      state.endDate = action.payload;
    },
  },
});

export const {
  updateCurrentFilter,
  updateTransactions,
  updateStartDate,
  updateEndDate,
} = transactionsSlice.actions;
export default transactionsSlice.reducer;
