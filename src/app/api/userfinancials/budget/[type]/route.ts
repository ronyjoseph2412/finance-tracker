import { usersRepo } from "@/Utils/server";
import { jwtMiddleware } from "@/Utils/server/api";
import { userFinancialsRepo } from "@/Utils/server/usersFinancials-repo";
import { verifyTokenwithAuth } from "@/Utils/server/verifyTokenwithAuth";
import { NextResponse } from "next/server";

export async function POST(request: any, { params: { type } }: any) {
  const body = await request.json();
  try {
    await jwtMiddleware(request);
    const User_ID = await usersRepo.getCurrent();
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
  } catch {
    if (!request.headers.get("Authorization")) {
      return NextResponse.json(
        { message: "User not logged in" },
        { status: 401 }
      );
    }

    const User_ID = await verifyTokenwithAuth(
      request.headers.get("Authorization")
    );
    // console.log("USER ID", User_ID);
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
}
