import { usersRepo } from "@/Utils/server";
import { jwtMiddleware } from "@/Utils/server/api";
import { userFinancialsRepo } from "@/Utils/server/usersFinancials-repo";
import { NextResponse } from "next/server";

export async function POST(request: any, { params: { type } }: any) {
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
    switch (type) {
      case "create": {
        const res = await userFinancialsRepo.createBudget(
          fetched_user.username,
          body
        );
        return NextResponse.json(res, { status: 200 });
      }

      default: {
        return NextResponse.json(
          { message: "Invalid Budget type" },
          { status: 400 }
        );
      }
    }
  }
}
