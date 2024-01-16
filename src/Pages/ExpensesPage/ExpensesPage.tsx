import ExpensesTable from "@/Components/ExpensesPage/ExpensesTable";
import styles from "./ExpensesPage.module.css";
import ExpesnesGraph from "@/Components/ExpensesGraph/ExpensesGraph";
export type ExepensesPageProps = {};
export const ExepensesPage: React.FC<ExepensesPageProps> = ({}) => {
  return (
    <div className={styles.Wrapper}>
      <h1>Transactions</h1>
      <div className={styles.LayoutContainer}>
        <div className={[styles.TableWrapper, styles.ShadowBox].join(" ")}>
          <ExpensesTable />
        </div>
        <div className={styles.CategoriesWrapper}>
          <div
            className={styles.ShadowBox}
            style={{
              width: "90%",
            }}
          >
            <ExpesnesGraph graphType="pie" />
          </div>
          <div
            className={styles.ShadowBox}
            style={{
              width: "90%",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ExepensesPage;
