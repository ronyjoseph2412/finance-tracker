import tempData from "@/tempData";
import styles from "./DashboardTransactionsList.module.css";
import { sortAllTransactions } from "@/Utils/sortTransactions";
import { nthFormatter } from "@/Utils/dateModify";
import Image from "next/image";
import TransactionsLogo from "@/Assets/Debit.png";
export type DashboardtransactionsListProps = {};
export const DashboardtransactionsList: React.FC<
  DashboardtransactionsListProps
> = ({}) => {
  const sortedTransactions = sortAllTransactions(
    tempData.expenditureData,
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
        tags: transaction.tags,
      };
    });

  return (
    <div className={styles.TransactionList}>
      {/* {transaction(false)}
      {transaction(false)}
      {transaction(false)}
      {transaction(false)}
      {transaction(false)}
      {transaction(false)}
      {transaction(true)} */}

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
                <div className={styles.ReasonLabel}>{transaction.tags}</div>
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
