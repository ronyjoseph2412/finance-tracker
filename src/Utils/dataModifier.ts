interface DataItem {
  tags: string;
  amount: number;
}

interface StructuredData {
  [tag: string]: number;
}

interface LabelledData {
  id: number;
  label: string;
  value: number;
  percentage: string;
}

export const dataModifier = (data: DataItem[]): LabelledData[] => {
  const structuredData: StructuredData = {};
  data.forEach((item) => {
    if (!structuredData[item.tags]) {
      structuredData[item.tags] = item.amount;
    } else {
      structuredData[item.tags] += item.amount;
    }
  });

  //   Sort the data in descending order
  const sortedData: StructuredData = {};
  Object.keys(structuredData)
    .sort((a, b) => structuredData[b] - structuredData[a])
    .forEach((key) => {
      sortedData[key] = structuredData[key];
    });

  sortedData["Others"] = 0;
  for (let i = 4; i < Object.keys(sortedData).length; i++) {
    sortedData["Others"] += sortedData[Object.keys(sortedData)[i]];
    delete sortedData[Object.keys(sortedData)[i]];
  }

  const labelledData: LabelledData[] = [];
  Object.keys(sortedData).forEach((key, index) => {
    labelledData.push({
      id: index,
      label: `${key} ${(sortedData[key] / data.length).toFixed(2)} %`,
      value: sortedData[key],
      percentage: (sortedData[key] / data.length).toFixed(2),
    });
  });

  return labelledData;
};
