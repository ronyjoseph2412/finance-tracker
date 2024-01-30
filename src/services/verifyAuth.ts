export const verifyAuth = async (token: string) => {
  const response = await fetch(`${process.env.API_URL}/account/verify`, {
    method: "GET",
    headers: {
      Authorization: token,
    },
  });

  return response;
};
