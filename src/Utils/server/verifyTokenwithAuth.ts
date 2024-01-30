import jwt from "jsonwebtoken";

export const verifyTokenwithAuth = async (token: string) => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET!);
  const id = decoded.sub as string;
  return id;
};
