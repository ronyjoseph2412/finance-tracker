"use client";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import tempData from "@/tempData";
import { dataModifier } from "@/Utils/dataModifier";
import styles from "../ExpensesGraph.module.css";

const ExpensePieChart = () => {
  const labelledData = dataModifier(tempData.expenditureData);
  // const totalAmount = labelledData.reduce((acc, curr) => acc + curr.value, 0);
  return (
    <PieChart
      series={[
        {
          data: labelledData,
          innerRadius: 60,
          outerRadius: 130,
          paddingAngle: 5,
          cornerRadius: 5,
          startAngle: -90,
          endAngle: 270,
          cx: 150,
          cy: 150,
          highlightScope: { faded: "global", highlighted: "series" },
        },
      ]}
      slotProps={{
        legend: {
          position: {
            vertical: "middle",
            horizontal: "right",
          },
          padding: 15,
          labelStyle: {
            fontSize: 14,
          },
          markGap: 5,
          itemGap: 10,
        },
      }}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: "white",
          fontWeight: "bold",
        },
      }}
      height={350}
    />
  );
};

export default ExpensePieChart;
