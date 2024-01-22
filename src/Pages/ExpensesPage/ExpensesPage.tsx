import styles from "./ExpensesPage.module.css";
import ExpesnesGraph from "@/Components/ExpensesGraph/ExpensesGraph";
import SelectComponent from "@/Components/SelectComponent/SelectComponent";
import staticData from "@/staticData";
import ExpenseTable from "@/Components/ExpensesPage/ExpensesTable";
import tempData from "@/tempData";
export type ExepensesPageProps = {};
export const ExepensesPage: React.FC<ExepensesPageProps> = ({}) => {
  const data = tempData.expenditureData.map((item) => {
    return {
      date: new Date(item.date).toLocaleDateString(),
      business: item.business,
      tags: item.tags,
      amount: item.amount,
    };
  });
  return (
    <div className={styles.Wrapper}>
      <div className={styles.HeadingWrapper}>
        <h1>Transactions</h1>
        <div>
          <SelectComponent
            label=""
            selectOptions={staticData.transactionsFilterOptions}
          />
        </div>
      </div>
      <div className={styles.LayoutContainer}>
        <div className={[styles.TableWrapper, styles.ShadowBox].join(" ")}>
          {/* <ExpenseTable data={data} /> */}
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
          >
            <ExpesnesGraph graphType="line" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExepensesPage;
