export const getUserBudgets = async (token: string, id: string) => {
  const response = await fetch(
    `${process.env.API_URL}/userfinancials/${id}`,
    {
      method: "GET",
      headers: {
        Authorization: token,
      },
      credentials: "include",
    }
  );
  const data = await response.json();
  return data;
};
