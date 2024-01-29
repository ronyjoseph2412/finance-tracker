import { jwtMiddleware } from "@/Utils/server/api";
import { NextResponse } from "next/server";

export async function GET(request: any) {
  const User_ID = await jwtMiddleware(request);
  if (!User_ID) {
    return NextResponse.json(
      { message: "User not logged in" },
      { status: 401 }
    );
  } else {
    return NextResponse.json({ message: "User logged in" }, { status: 200 });
  }
}
