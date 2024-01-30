import tempData from "@/tempData";
import styles from "./DashboardTransactionsList.module.css";
import { sortAllTransactions } from "@/Utils/sortTransactions";
import { nthFormatter } from "@/Utils/dateModify";
import Image from "next/image";
import TransactionsLogo from "@/Assets/Debit.png";
import { getUserFinancials } from "@/services/getUserFinancials";
import { cookies } from "next/headers";
export type DashboardtransactionsListProps = {};
export const DashboardtransactionsList: React.FC<
  DashboardtransactionsListProps
> = async ({}) => {
  const token = cookies().get("authorization")?.value ?? "";
  const userFinancials = await getUserFinancials(token);

  const sortedTransactions = sortAllTransactions(
    userFinancials.expensesData,
    "Date"
  )
    .slice(0, 6)
    .map((transaction) => {
      const date = new Date(transaction.date);
      const month = date.toLocaleString("default", { month: "short" });
      const day = nthFormatter(date.getDate());
      const year = date.getFullYear();
      return {
        date: `${day} ${month}, ${year}`,
        amount: transaction.amount,
        // business: transaction.business,
        payee: transaction.payee,
        category: transaction.category,
      };
    });

  return (
    <div className={styles.TransactionList}>
      {sortedTransactions.map((transaction, index) => {
        return (
          <div
            className={[styles.RowWrapper, styles.Transaction].join(" ")}
            style={
              index === sortedTransactions.length - 1
                ? { border: "None" }
                : undefined
            }
          >
            <div
              className={styles.RowWrapper}
              style={{
                justifyContent: "flex-start",
                alignItems: "center",
                marginLeft: "8px",
              }}
            >
              <div className={styles.Logo}>
                <Image
                  className={styles.LogoInner}
                  src={TransactionsLogo}
                  alt="Credit card payment icons created by rezamr - Flaticon"
                />
              </div>
              <div className={styles.ColWrapper}>
                <div className={styles.ReasonLabel}>{transaction.category}: {transaction.payee}</div>
                <div className={styles.DateLabel}>{transaction.date}</div>
              </div>
            </div>
            <div className={styles.Amount}>₹ {transaction.amount}</div>
          </div>
        );
      })}
    </div>
  );
};

export default DashboardtransactionsList;
