import { Button } from "@mui/material";
import styles from "./Transactions.module.css";
import DashboardtransactionsList from "../DashboardTransactionsList/DashboardTransactionsList";
export type TransactionsProps = { page: String };
export const Transactions: React.FC<TransactionsProps> = ({ page }) => {
  const DashboardTransactions = () => {
    return (
      <div className={styles.Wrapper}>
        <div className={styles.ColWrapper}>
          <div className={styles.HeadingColumn}>
            <div
              className={styles.RowWrapper}
              style={{
                borderBottom: "1px solid #e0e0e0",
              }}
            >
              <div className={styles.Heading}>Recent Transactions</div>
              <div className={styles.MarginRight}>
                <Button variant="text">View All</Button>
              </div>
            </div>
            <DashboardtransactionsList />
          </div>
          <div
            className={styles.RowWrapper}
            style={{
              borderTop: "1px solid #e0e0e0",
            }}
          >
            <div
              className={styles.Heading}
              style={{
                fontSize: "1.2rem",
                fontWeight: "normal",
              }}
            >
              Missed a Transaction?
            </div>
            <div className={styles.MarginRight}>
              <Button variant="outlined">Add now</Button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const TransactionsTransactions = () => {
    return (
      <div className={styles.Wrapper}>
        <div className={styles.RowWrapper}>
          <div className={styles.Heading}>Transactions</div>
          <div>View All</div>
        </div>
      </div>
    );
  };

  switch (page) {
    case "Dashboard":
      return DashboardTransactions();
    case "Transactions":
      return TransactionsTransactions();
    default:
      return DashboardTransactions();
  }
};

export default Transactions;
