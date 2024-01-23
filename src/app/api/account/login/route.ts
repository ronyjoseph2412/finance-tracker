import { usersRepo } from "@/Utils/server";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

// login.schema = joi.object({
//     username: joi.string().required(),
//     password: joi.string().required()
// });

export async function POST(request: Request) {
  const body = await request.json();
  const res = await usersRepo.authenticate(body);
  if (res.message === "Username or password is incorrect") {
    return NextResponse.json(res, { status: 400 });
  } else {
    const { user, token } = res;
    cookies().set("authorization", token || "", { httpOnly: true });

    return NextResponse.json(user, { status: 200 });
  }

  // return jwt token in http only cookie
}
