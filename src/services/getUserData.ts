export const getUserData = async (token: string) => {
    const response = await fetch(`${process.env.API_URL}/account`, {
      method: "GET",
      headers: {
        Authorization: token,
      },
      credentials: "include",
    });
    const data = await response.json();
    return data;
  };
  