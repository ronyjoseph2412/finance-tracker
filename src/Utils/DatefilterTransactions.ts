interface DataItem {
  tags: string;
  amount: number;
  date: number;
}

interface AlternativeDataItem {
  date: number;
  payee: string;
  note: string;
  category: string;
  amount: number;
  bankName: string;
}

interface FilterDataItemObject {
  tags: string[];
  totalAmount: number;
  date: number;
}

interface FilteredDataItem {
  [date: number]: FilterDataItemObject;
}

interface LabelDataItem {
  type: string;
  description: string;
  amount: number;
  frequency: string;
  date: number;
  paidBy: string;
}

// Check for fixing any type errors
export const filterTransactionsbyDate = (
  data: DataItem[] | AlternativeDataItem[],
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
  const monthStart = new Date(year, month, 1).getTime() / 1000;
  const monthEnd = new Date(year, month + 1, 0).getTime() / 1000;
  const filteredData = data.filter(
    (item) => item.date >= monthStart && item.date <= monthEnd
  );

  const structuredData: {
    [date: number]: {
      totalAmount: number;
    };
  } = {};
  filteredData.forEach((item: any) => {
    const day = new Date(item.date * 1000).getDate();
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

export const getTransactionsofMonthforLabels = (
  data: LabelDataItem[],
  month: number,
  year: number
) => {
  const monthStart = new Date(year, month, 1).getTime() / 1000;
  const monthEnd = new Date(year, month + 1, 0).getTime() / 1000;
  const filteredData = data.filter(
    (item) => item.date >= monthStart && item.date <= monthEnd
  );

  return filteredData;
};
