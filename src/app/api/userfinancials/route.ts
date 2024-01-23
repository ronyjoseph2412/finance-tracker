import { usersRepo } from "@/Utils/server";
import { jwtMiddleware } from "@/Utils/server/api";
import { userFinancialsRepo } from "@/Utils/server/usersFinancials-repo";
import { NextResponse } from "next/server";

export async function GET(request: any) {
  // Get the current user's financials, but only if they are logged in
  await jwtMiddleware(request);
  const user = await usersRepo.getCurrent();
  const fetched_user = await usersRepo.getById(user.id);
  const financials = await userFinancialsRepo.getUserFinancialData(
    fetched_user.username
  );
  return NextResponse.json(financials, { status: 200 });
}
