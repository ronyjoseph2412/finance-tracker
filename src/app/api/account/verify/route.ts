import { usersRepo } from "@/Utils/server";
import { jwtMiddleware } from "@/Utils/server/api";
import { verifyTokenwithAuth } from "@/Utils/server/verifyTokenwithAuth";
import { NextResponse } from "next/server";

export async function GET(request: any) {
  try {
    await jwtMiddleware(request);
    const User_ID = usersRepo.getCurrent();
    if (!User_ID) {
      return NextResponse.json(
        { message: "User not logged in" },
        { status: 401 }
      );
    }
    return NextResponse.json({ message: "User logged in" }, { status: 200 });
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
      return NextResponse.json({ message: "User logged in" }, { status: 200 });
    }
  }
}
