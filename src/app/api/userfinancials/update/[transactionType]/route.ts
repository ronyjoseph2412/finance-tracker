import { usersRepo } from "@/Utils/server";
import { jwtMiddleware } from "@/Utils/server/api";
import { userFinancialsRepo } from "@/Utils/server/usersFinancials-repo";
import { NextResponse } from "next/server";

export async function POST(request: any, { params: { transactionType } }: any) {
  // Get Path from request
  const User_ID = await jwtMiddleware(request);
  const body = await request.json();

  if (!User_ID) {
    return NextResponse.json(
      { message: "User not logged in" },
      { status: 401 }
    );
  } else {
    const fetched_user = await usersRepo.getById(User_ID);
    switch (transactionType) {
      case "income": {
        const res = await userFinancialsRepo.updateIncomeData(
          fetched_user.username,
          body
        );
        return NextResponse.json(res, { status: 200 });
      }
      case "expense": {
        const res = await userFinancialsRepo.updateExpenseData(
          fetched_user.username,
          body
        );
        return NextResponse.json(res, { status: 200 });
      }
      default: {
        return NextResponse.json(
          { message: "Invalid transaction type" },
          { status: 400 }
        );
      }
    }
  }
}
