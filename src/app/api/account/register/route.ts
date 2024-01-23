import { usersRepo } from "@/Utils/server";
import { NextResponse } from "next/server";

// export async function GET(request: Request) {
//   // ...
//   return NextResponse.json({ message: "Hello sa" });
// }

export async function POST(request: Request) {
  const body = await request.json();
  const res = await usersRepo.create(body);
  if (res.message === "Username is already taken") {
    return NextResponse.json(
      { message: "Username is already taken" },
      { status: 400 }
    );
  } else {
    return NextResponse.json(
      { message: res.message },
      {
        status: 200,
      }
    );
  }
}
