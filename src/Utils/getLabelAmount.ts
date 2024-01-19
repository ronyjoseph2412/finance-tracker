import tempData from "@/tempData";

export const getLabelAmount = (labelType: string) => {
  switch (labelType) {
    case "Income":
      const totalIncome = tempData.incomes.reduce(
        (acc, cur) => acc + cur.amount,
        0
      );
      return totalIncome;
    default:
      return 1000;
  }
};
