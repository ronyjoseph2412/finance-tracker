export const createNewBudget = async (
  token: string,
  budgetData: {
    date: string;
    goal: string;
    requiredAmount: number;
  }
) => {
  const response = await fetch(`api/userfinancials/budget/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    credentials: "include",
    body: JSON.stringify(budgetData),
  });
  const data = await response.json();
  return data;
};
