import { usersRepo } from "@/Utils/server";
import { jwtMiddleware } from "@/Utils/server/api";
import { userFinancialsRepo } from "@/Utils/server/usersFinancials-repo";
import { NextResponse } from "next/server";

export async function POST(req: any) {
  const User_ID = await jwtMiddleware(req);
  const body = await req.json();

  if (!User_ID) {
    return NextResponse.json(
      { message: "User not logged in" },
      { status: 401 }
    );
  } else {
    const fetched_user = await usersRepo.getById(User_ID);
    const res = await userFinancialsRepo.createInvestments(
      fetched_user.username,
      body
    );
    return NextResponse.json(res, { status: 200 });
  }
}
