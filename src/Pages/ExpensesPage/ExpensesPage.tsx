import styles from "./ExpensesPage.module.css";
import ExpesnesGraph from "@/Components/ExpensesGraph/ExpensesGraph";
import SelectComponent from "@/Components/SelectComponent/SelectComponent";
import staticData from "@/staticData";
import ExpenseTable from "@/Components/ExpensesPage/ExpensesTable";
import { cookies } from "next/headers";
import { getUserFinancials } from "@/services/getUserFinancials";

export type ExepensesPageProps = {};
export const ExepensesPage: React.FC<ExepensesPageProps> = async ({}) => {
  const token = cookies().get("authorization")?.value ?? "";
  const userFinancials = await getUserFinancials(token);
  const expenditureData = userFinancials.expensesData;
  const Graphdata = expenditureData.map(
    (item: {
      date: string;
      payee: string;
      note: string;
      category: string;
      amount: number;
      bankName: string;
    }) => {
      return {
        date: item.date,
        business: item.payee,
        tags: item.category,
        amount: item.amount,
      };
    }
  );
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
          <ExpenseTable data={expenditureData} />
        </div>
        <div className={styles.CategoriesWrapper}>
          <div
            className={styles.ShadowBox}
            style={{
              width: "90%",
            }}
          >
            <ExpesnesGraph graphType="pie" Graphdata={Graphdata} />
          </div>
          <div
            className={styles.ShadowBox}
            style={{
              width: "90%",
            }}
          >
            <ExpesnesGraph graphType="line" Graphdata={Graphdata} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExepensesPage;
