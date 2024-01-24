import { jwtMiddleware } from "@/Utils/server/api";
import { userInvestmentsRepo } from "@/Utils/server/userInvestments-repo";
import { NextResponse } from "next/server";

export async function GET(request: any, { params: { investment_id } }: any) {
  // Get Path from request
  const User_ID = await jwtMiddleware(request);

  if (!User_ID) {
    return NextResponse.json(
      { message: "User not logged in" },
      { status: 401 }
    );
  } else {
    // const fetched_user = await usersRepo.getById(User_ID);
    const res = await userInvestmentsRepo.getInvestmentDataBudget(
      investment_id
    );
    return NextResponse.json(res, { status: 200 });
  }
}

export async function POST(request: any, { params: { id } }: any) {
  // Get Path from request
  const User_ID = await jwtMiddleware(request);
  const body = await request.json();

  if (!User_ID) {
    return NextResponse.json(
      { message: "User not logged in" },
      { status: 401 }
    );
  } else {
    // const fetched_user = await usersRepo.getById(User_ID);
    const res = await userInvestmentsRepo.UpdateInvestmentDataBudget(id, body);
    return NextResponse.json(res, { status: 200 });
  }
}
