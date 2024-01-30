import { verifyTokenwithAuth } from "@/Utils/server/verifyTokenwithAuth";
import { NextResponse } from "next/server";

export async function GET(request: any) {
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
