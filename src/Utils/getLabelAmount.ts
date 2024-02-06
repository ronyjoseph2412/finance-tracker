import { getTransactionsofMonthforLabels } from "./DatefilterTransactions";
import { timeStampedData } from "./timeStampedData";

interface IncomeType {
  type: string;
  description: string;
  amount: number;
  frequency: string;
  date: number;
  paidBy: string;
  bankName?: string;
}
export const getLabelAmount = (
  labelType: string,
  userFinancials: any,
  month: number,
  year: number
) => {
  switch (labelType) {
    case "Income":
      const incomeData = getTransactionsofMonthforLabels(
        timeStampedData(userFinancials.incomeData),
        month,
        year
      );
      const incomeTotal = incomeData.reduce(
        (a: number, b: IncomeType) => a + b.amount,
        0
      );
      return incomeTotal;
    case "Expenses":
      const expenseData = getTransactionsofMonthforLabels(
        timeStampedData(userFinancials.expensesData),
        month,
        year
      );
      const expenseTotal = expenseData.reduce(
        (a: number, b: IncomeType) => a + b.amount,
        0
      );
      return expenseTotal;
    case "Investments":
      const investmentData = getTransactionsofMonthforLabels(
        timeStampedData(userFinancials.investmentsData),
        month,
        year
      );
      const investmentTotal = investmentData.reduce(
        (a: number, b: IncomeType) => a + b.amount,
        0
      );
      return investmentTotal;

    case "Total Investments":
      const totalInvestmentData = userFinancials.investmentsData;
      const totalInvestmentAmount = totalInvestmentData.reduce(
        (a: number, b: IncomeType) => a + b.amount,
        0
      );
      return totalInvestmentAmount;

    default:
      return 0;
  }
};
