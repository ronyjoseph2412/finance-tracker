export const getUserFinancials = async (token: string) => {
    const response = await fetch(`${process.env.API_URL}/userfinancials`, {
      method: "GET",
      headers: {
        Authorization: token,
      },
      credentials: "include",
    });
    const data = await response.json();
    return data;
  };
  