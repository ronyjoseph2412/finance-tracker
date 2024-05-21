export const setBudget = async (
  token: string,
  expenseData: {
    date: string;
    payee: string;
    note: string;
    category: string;
    amount: number;
    bankName: string;
  }
) => {
  const response = await fetch(`api/userfinancials/update/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    credentials: "include",
    body: JSON.stringify(expenseData),
  });
  const data = await response.json();
  return data;
};
