import ExpensePieChart from "./Graphs/ExpensePieChart";
import styles from "./ExpensesGraph.module.css";
import ExpenseLineChart from "./Graphs/ExpensesLine";
export type ExpesnesGraphProps = {
  graphType: string;
  Graphdata: { date: string; business: string; tags: string; amount: number }[];
};
export const ExpesnesGraph: React.FC<ExpesnesGraphProps> = async ({
  graphType,
  Graphdata,
}) => {
  switch (graphType) {
    case "pie":
      return (
        <div className={styles.ChartWrapper}>
          <div className={styles.PieChartHeadingText}>
            Categorywise Expenditure
          </div>
          <ExpensePieChart data={Graphdata} />
        </div>
      );
    case "bar":
      return (
        <div>
          <h1>Bar Graph</h1>
        </div>
      );
    case "line":
      return (
        <div className={styles.ChartWrapper}>
          <div className={styles.PieChartHeadingText}>Spending Summary</div>
          <ExpenseLineChart Graphdata={Graphdata} />
        </div>
      );
    default:
      return (
        <div>
          <h1>Default Graph</h1>
        </div>
      );
  }
};

export default ExpesnesGraph;
