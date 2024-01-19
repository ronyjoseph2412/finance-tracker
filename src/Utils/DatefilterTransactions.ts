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
  startDate: number | null,
  endDate: number | null
) => {
  let filteredData: any = [];
  if (defaultOption) {
    const today = new Date();
    // Compare using Timestamps of last six days including today
    const todayTimestamp = today.getTime();
    const weekAgoTimestamp = todayTimestamp - 518400000;
    filteredData = data.filter(
      (item) => item.date >= weekAgoTimestamp && item.date <= todayTimestamp
    );
  } else if (startDate && !endDate) {
    const today = new Date();
    // Compare using Timestamps of last six days including today
    const todayTimestamp = today.getTime();
    filteredData = data.filter(
      (item) => item.date >= startDate && item.date <= todayTimestamp
    );
  } else if (startDate && endDate) {
    filteredData = data.filter(
      (item) => item.date >= startDate && item.date <= endDate
    );
  }
  return filteredData;
};

export const filterTransactionswithStructure = (
  data: DataItem[],
  defaultOption = true,
  startDate: number | null,
  endDate: number | null
): FilteredDataItem => {
  const filteredData = filterTransactionsbyDate(
    data,
    defaultOption,
    startDate,
    endDate
  );
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

  return structuredData;
};

export const getTransactionsofDay = (data: DataItem[], date: number) => {
  const filteredData = data.filter((item) => item.date === date);
  return filteredData;
};

export const getTransactionsofMonth = (
  data: DataItem[],
  month: number,
  year: number
) => {
  const monthStart = new Date(year, month, 1).getTime();
  const monthEnd = new Date(year, month + 1, 0).getTime();
  const filteredData = data.filter(
    (item) => item.date >= monthStart && item.date <= monthEnd
  );

  const structuredData: {
    [date: number]: {
      totalAmount: number;
    };
  } = {};
  filteredData.forEach((item: any) => {
    const day = new Date(item.date).getDate();
    if (!structuredData[day]) {
      structuredData[day] = {
        totalAmount: item.amount,
      };
    } else {
      structuredData[day].totalAmount += item.amount;
    }
  });

  return structuredData;
};
