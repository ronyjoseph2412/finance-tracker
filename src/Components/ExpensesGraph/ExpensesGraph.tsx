import ExpensePieChart from "./Graphs/ExpensePieChart";
import styles from "./ExpensesGraph.module.css";
export type ExpesnesGraphProps = { graphType: string };
export const ExpesnesGraph: React.FC<ExpesnesGraphProps> = ({ graphType }) => {
  // console.log({  })
  // const [, set] = React.useState();
  // React.useEffect(() => {}, [])
  switch (graphType) {
    case "pie":
      return (
        <div className={styles.PieChartWrapper}>
          <div className={styles.PieChartHeadingText}>
            Categorywise Expenditure
          </div>
          <ExpensePieChart />
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
        <div>
          <h1>Line Graph</h1>
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
