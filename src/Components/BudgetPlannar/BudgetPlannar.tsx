// "use client";
// import LinearProgress from "@mui/material/LinearProgress";
import styles from "./BudgetPlannar.module.css";
import currencySymbol from "@/Utils/currencySymbol";
import CircularProgress from "@mui/material/CircularProgress";
import { Box, Typography } from "@mui/material";
import { cookies } from "next/headers";
import { getUserFinancials } from "@/services/getUserFinancials";
import BudgetCard from "./BudgetCard";
import SetBudget from "./SetBudget";
import { AddTransaction } from "../DashboardComponents/UpperSection/AddTransaction";
export type BudgetPlannarProps = {};

export const BudgetPlannar: React.FC<BudgetPlannarProps> = async ({}) => {
  const token = cookies().get("authorization")?.value ?? "";
  const userFinancials = await getUserFinancials(token);
  const budgetData = userFinancials.budgetData;
  return (
    <div className={styles.Wrapper}>
      <div className={styles.HeadingWrapper}>
        <h1>Budget Plannar</h1>
      </div>
      <div className={styles.LayoutContainer}>
        {budgetData.map(
          (card: {
            goal: string;
            requiredAmount: number;
            date: string;
            investment_id: string;
            currentAmount: number;
          }) => {
            return (
              <BudgetCard
                id={card.investment_id}
                goal={card.goal}
                requiredAmount={card.requiredAmount}
                token={token}
              />
            );
          }
        )}
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
          <div className={styles.Goal}>View All</div>
        </div>
        <AddTransaction
          token={token}
          fields={[
            {
              name: "Date",
              key: "date",
              type: "calendar",
            },
            {
              name: "Budget Title",
              key: "goal",
              type: "input",
            },
            {
              name: "Goal Amount",
              key: "requiredAmount",
              type: "input",
            },
          ]}
          content={{
            button: "Create New",
            heading: "Set a new Budget",
          }}
        />
      </div>
    </div>
  );
};

export default BudgetPlannar;
