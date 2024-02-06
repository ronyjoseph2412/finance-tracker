// "use client";
// import LinearProgress from "@mui/material/LinearProgress";
import styles from "./BudgetPlannar.module.css";
import currencySymbol from "@/Utils/currencySymbol";
import CircularProgress from "@mui/material/CircularProgress";
import { Box, Typography } from "@mui/material";
import { cookies } from "next/headers";
import { getUserFinancials } from "@/services/getUserFinancials";
import BudgetCard from "./BudgetCard";
export type BudgetPlannarProps = {};
const budgetPlannarCardsData = [
  {
    goal: "Emergency Fund",
    requiredAmount: 15000,
    currentAmount: 3000,
    investmentsData: [
      {
        amount: 1000,
        type: "Savings Account",
        name: "Federal Bank",
      },
      {
        amount: 2000,
        type: "Savings Account",
        name: "Federal Bank",
      },
    ],
  },
  {
    goal: "Buy a iPhone",
    requiredAmount: 80000,
    currentAmount: 30000,
    investmentsData: [
      {
        amount: 1000,
        type: "Savings Account",
        name: "Federal Bank",
      },
      {
        amount: 2000,
        type: "Savings Account",
        name: "Federal Bank",
      },
    ],
  },
];

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
              // <div className={styles.BudgetPlannarCard} key={card.goal}>
              //   <div className={styles.Goal}>{card.goal}</div>
              //   <Box display="flex" justifyContent="center" alignItems="center">
              //     <CircularProgress
              //       style={{ padding: "10px" }}
              //       value={(card.currentAmount * 100) / card.requiredAmount}
              //       variant="determinate"
              //     />
              //     <Typography position="absolute">
              //       {Math.ceil((card.currentAmount * 100) / card.requiredAmount)}%
              //     </Typography>
              //   </Box>
              //   <div>
              //     <span className={styles.Amount}>
              //       {`${currencySymbol.INDIA} ${card.currentAmount} / ${currencySymbol.INDIA} ${card.requiredAmount}`}
              //     </span>
              //   </div>
              // </div>
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
      </div>
    </div>
  );
};

export default BudgetPlannar;
