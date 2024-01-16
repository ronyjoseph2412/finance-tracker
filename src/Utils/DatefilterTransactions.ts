interface DataItem {
  tags: string;
  amount: number;
  date: number;
}

interface FilterDataItemObject {
  tags: string[];
  totalAmount: number;
  date: number;
}

interface FilteredDataItem {
  [date: number]: FilterDataItemObject;
}

// Check for fixing any type errors
export const filterTransactionsbyDate = (
  data: DataItem[],
  defaultOption = true,
  startDate?: number,
  endDate?: number
): FilteredDataItem => {
  let filteredData: any = [];
  if (defaultOption) {
    const today = new Date("2022-01-21");
    // Compare using Timestamps of last six days including today
    const todayTimestamp = today.getTime();
    const weekAgoTimestamp = todayTimestamp - 518400000;
    filteredData = data.filter(
      (item) => item.date >= weekAgoTimestamp && item.date <= todayTimestamp
    );
  } else if (startDate && endDate) {
    filteredData = data.filter(
      (item) => item.date >= startDate && item.date <= endDate
    );
  }

  // const structuredData: FilteredDataItem[] = [];
  // filteredData.forEach((item: any) => {
  //   if (!structuredData[item.date]) {
  //     structuredData[item.date] = {
  //       tags: [item.tags],
  //       totalAmount: item.amount,
  //       date: item.date,
  //     };
  //   } else {
  //     structuredData[item.date].tags.push(item.tags);
  //     structuredData[item.date].totalAmount += item.amount;
  //   }
  // });
  const structuredData: FilteredDataItem = {};
  filteredData.forEach((item: any) => {
    if (!structuredData[item.date]) {
      structuredData[item.date] = {
        tags: [item.tags],
        totalAmount: item.amount,
        date: item.date,
      };
    } else {
      structuredData[item.date].tags.push(item.tags);
      structuredData[item.date].totalAmount += item.amount;
    }
  });

  console.log(structuredData);
  return structuredData;

};
