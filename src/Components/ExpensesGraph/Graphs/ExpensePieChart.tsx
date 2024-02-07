"use client";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import tempData from "@/tempData";
import { dataModifier } from "@/Utils/dataModifier";
import { filterTransactionsbyDate } from "@/Utils/DatefilterTransactions";
import { useAppSelector } from "@/lib/hooks";
import staticData from "@/staticData";
import { useEffect, useState } from "react";

interface ExpenseLineChartProps {
  data: { date: string; business: string; tags: string; amount: number }[];
}

const ExpensePieChart: React.FC<ExpenseLineChartProps> = ({ data }) => {
  let timestampedData = data.map((item: any) => {
    return {
      ...item,
      date: new Date(item.date).getTime(),
    };
  });
  const [labelledData, setLabelledData] = useState<
    {
      id: number;
      label: string;
      value: number;
      percentage: string;
    }[]
  >([]);
  const { startDate, endDate, currentFilter } = useAppSelector(
    (state) => state.transactionsReducer
  );

  useEffect(() => {
    const filteredData = filterTransactionsbyDate(
      timestampedData,
      currentFilter === staticData.transactionsFilterOptions[0] ? true : false,
      startDate ? startDate * 1000 : null,
      endDate ? endDate * 1000 : new Date().getTime()
    );
    setLabelledData(dataModifier(filteredData));
  }, [startDate, endDate, currentFilter]);
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
