"use client";
// import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import tempData from "@/tempData";
import { filterTransactionswithStructure } from "@/Utils/DatefilterTransactions";
import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { useAppSelector } from "@/lib/hooks";
import staticData from "@/staticData";

interface TransactionData {
  tags: string;
  totalAmount: number;
}

const ExpenseLineChart: React.FC = () => {
  const { startDate, endDate, currentFilter } = useAppSelector(
    (state) => state.transactionsReducer
  );

  const structuredData: {
    [date: number]: {
      tags: string[];
      totalAmount: number;
      date: number;
    };
  } = filterTransactionswithStructure(
    tempData.expenditureData,
    currentFilter === staticData.transactionsFilterOptions[0] ? true : false,
    startDate ? startDate * 1000 : null,
    endDate ? endDate * 1000 : new Date().getTime()
  );

  let xAxis: string[] = [];
  let yAxis: number[] = [];

  Object.keys(structuredData).forEach((key) => {
    const date = new Date(parseInt(key));
    // if(defaultOption){
    // Pass the weekday only
    // xAxis.push(date.toLocaleDateString("en-US", { weekday: "short" }));
    // }
    // xAxis.push();
    if (currentFilter === staticData.transactionsFilterOptions[0]) {
      xAxis.push(date.toLocaleDateString("en-US", { weekday: "short" }));
      yAxis.push(structuredData[key].totalAmount);
    } else {
      xAxis.push(date.toLocaleDateString());
      yAxis.push(structuredData[key].totalAmount);
    }
  });

  return (
    <LineChart
      width={500}
      height={300}
      series={[{ data: yAxis, label: "Timeline", area: true, showMark: false }]}
      xAxis={[{ scaleType: "point", data: xAxis }]}
      sx={{
        ".MuiLineElement-root": {
          display: "none",
        },
      }}
    />
  );
};

export default ExpenseLineChart;
