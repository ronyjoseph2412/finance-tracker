interface IncomeType {
  type: string;
  description: string;
  amount: number;
  frequency: string;
  date: string;
  paidBy: string;
  bankName?: string;
}
export const getLabelAmount = (labelType: string, userFinancials: any) => {
  switch (labelType) {
    case "Income":
      const incomeData = userFinancials.incomeData;
      const incomeTotal = incomeData.reduce(
        (a: number, b: IncomeType) => a + b.amount,
        0
      );
      return incomeTotal;
    case "Expenses":
      const expenseData = userFinancials.expensesData;
      const expenseTotal = expenseData.reduce(
        (a: number, b: IncomeType) => a + b.amount,
        0
      );
      return expenseTotal;
    default:
      return 1000;
  }
};
