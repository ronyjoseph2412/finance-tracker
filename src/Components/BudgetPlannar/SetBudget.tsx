"use client";
import styles from "./BudgetPlannar.module.css";
export type SetBudgetProps = {};
export const SetBudget: React.FC<SetBudgetProps> = ({}) => {
  return (
    <div
      className={styles.BudgetPlannarCard}
      style={{
        height: "fit-content",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        padding: "1rem",
        width: "87%",
        cursor: "pointer",
      }}
    >
      <div className={styles.Goal}>Create new</div>
    </div>
  );
};

export default SetBudget;
