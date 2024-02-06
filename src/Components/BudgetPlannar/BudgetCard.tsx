"use client";
import { CircularProgress, Typography } from "@mui/material";
import styles from "./BudgetPlannar.module.css";
import { Box } from "@mui/system";
import currencySymbol from "@/Utils/currencySymbol";
import { useEffect, useState } from "react";

export type BudgetCardProps = {
  id: string;
  token: string;
  goal: string;
  requiredAmount: number;
};
export const BudgetCard: React.FC<BudgetCardProps> = ({
  id,
  token,
  goal,
  requiredAmount,
}) => {
  const [data, setData] = useState(null);
  const [card, setCard] = useState(null);
  useEffect(() => {
    const response = fetch(`api/userfinancials/investments/${id}`, {
      method: "GET",
      headers: {
        Authorization: token,
      },
      credentials: "include",
    });
    response
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  useEffect(() => {
    if (data) {
      const currentAmount = data.investmentsData.reduce(
        (acc, investment) => acc + investment.amount,
        0
      );
      setCard({
        id: data.investment_id,
        requiredAmount: requiredAmount,
        currentAmount: currentAmount,
      });
    }
  }, [data]);

  if (!card) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.BudgetPlannarCard} key={id}>
      <div className={styles.Goal}>{goal}</div>
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress
          style={{ padding: "10px" }}
          value={(card?.currentAmount * 100) / card?.requiredAmount}
          variant="determinate"
        />
        <Typography position="absolute">
          {Math.ceil((card?.currentAmount * 100) / card?.requiredAmount)}%
        </Typography>
      </Box>
      <div>
        <span className={styles.Amount}>
          {`${currencySymbol.INDIA} ${card?.currentAmount} / ${currencySymbol.INDIA} ${card?.requiredAmount}`}
        </span>
      </div>
    </div>
  );
};

export default BudgetCard;
