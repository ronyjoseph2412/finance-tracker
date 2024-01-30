import { usersRepo } from "@/Utils/server";
import { jwtMiddleware } from "@/Utils/server/api";
import { verifyTokenwithAuth } from "@/Utils/server/verifyTokenwithAuth";
import { NextResponse } from "next/server";

export async function GET(request: any) {
  // Get the current user's financials, but only if they are logged in
  try {
    await jwtMiddleware(request);
    const user_id = await usersRepo.getCurrent();
    const fetched_user = await usersRepo.getById(user_id);
    return NextResponse.json(fetched_user, { status: 200 });
  } catch {
    let User_ID = await verifyTokenwithAuth(
      request.headers.get("Authorization")
    );
    const fetched_user = await usersRepo.getById(User_ID);
    return NextResponse.json(fetched_user, { status: 200 });
  }
}
