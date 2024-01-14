import styles from "./DashboardTransactionsList.module.css";
export type DashboardtransactionsListProps = {};
export const DashboardtransactionsList: React.FC<
  DashboardtransactionsListProps
> = ({}) => {
  // console.log({  })
  // const [, set] = React.useState();
  // React.useEffect(() => {}, [])

  const transaction = (lastIndex: boolean) => {
    return (
      <div
        className={[styles.RowWrapper, styles.Transaction].join(" ")}
        style={lastIndex ? { border: "None" } : undefined}
      >
        <div
          className={styles.RowWrapper}
          style={{
            justifyContent: "flex-start",
            alignItems: "center",
            marginLeft: "8px",
          }}
        >
          <div className={styles.Logo}>Logo</div>
          <div className={styles.ColWrapper}>
            <div className={styles.ReasonLabel}>Title</div>
            <div className={styles.DateLabel}>Date</div>
          </div>
        </div>
        <div className={styles.Amount}>$ 50000</div>
      </div>
    );
  };
  return (
    <div className={styles.TransactionList}>
      {transaction(false)}
      {transaction(false)}
      {transaction(false)}
      {transaction(false)}
      {transaction(false)}
      {transaction(false)}
      {transaction(true)}
    </div>
  );
};

export default DashboardtransactionsList;
