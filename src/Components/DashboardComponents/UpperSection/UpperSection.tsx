import tempData from "@/tempData";
import staticData from "@/staticData";
import styles from "./UpperSection.module.css";
import { Card } from "@mui/material";
import Transactions from "@/Components/Transactions/Transactions";
// import { MonthCalendar } from '@mui/x-date-pickers/MonthCalendar';

const trackerCards = tempData.trackerCards;

export type UpperSectionProps = {};
const CalendarComponent = () => {
  return (
    <div className={styles.ExpenseGraph}>Calendar with Expense on Each Day</div>
  );
};
const TrackerCard = (labelType: String, amount = "0.00") => {
  return (
    <div className={styles.TrackerCard}>
      <div>{labelType}</div>
      <div>
        <span
          style={{
            color:
              labelType === "Income"
                ? "green"
                : labelType === "Expenses"
                ? "red"
                : "blue",
          }}
        >
          $ {amount}
        </span>
      </div>
    </div>
  );
};

export const UpperSection: React.FC<UpperSectionProps> = ({}) => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.RowWrapper}>
        <div className={styles.WelcomeBack}>
          <h1>
            {staticData.dashboardPage.message}
            <span className={styles.Name}>{tempData.firstName}!</span>
          </h1>
        </div>
        <div>MonthPicker [This Month]</div>
      </div>
      <div className={styles.GridWrapper}>
        <div className={[styles.ColWrapper, styles.BroadColumn].join(" ")}>
          <div className={styles.RowWrapper}>
            <div className={styles.TrackerWrapper}>
              {trackerCards.map((card) => {
                return TrackerCard(card.key, card.amount);
              })}
            </div>
          </div>
          {CalendarComponent()}
        </div>
        <div className={styles.NarrowColumn}>
            <Transactions page={"Dashboard"} />
        </div>
      </div>
    </div>
  );
};

export default UpperSection;
