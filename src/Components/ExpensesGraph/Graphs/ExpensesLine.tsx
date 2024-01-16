"use client";
// import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import tempData from "@/tempData";
import { filterTransactionsbyDate } from "@/Utils/DatefilterTransactions";
import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

interface TransactionData {
  tags: string;
  totalAmount: number;
}

const ExpenseLineChart: React.FC = () => {
  const structuredData: {
    [date: number]: {
      tags: string[];
      totalAmount: number;
      date: number;
    };
  } = filterTransactionsbyDate(tempData.expenditureData, true);

  let xAxis: string[] = [];
  let yAxis: number[] = [];

  Object.keys(structuredData).forEach((key) => {
    const date = new Date(parseInt(key));
    // if(defaultOption){
    // Pass the weekday only
    // xAxis.push(date.toLocaleDateString("en-US", { weekday: "short" }));
    // }
    // xAxis.push();
    xAxis.push(date.toLocaleDateString("en-US", { weekday: "short" }));
    yAxis.push(structuredData[key].totalAmount);
  });

  console.log(xAxis, yAxis);

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
