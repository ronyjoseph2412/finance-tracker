import { usersRepo } from "@/Utils/server";
import { jwtMiddleware } from "@/Utils/server/api";
import { userInvestmentsRepo } from "@/Utils/server/userInvestments-repo";
import { verifyTokenwithAuth } from "@/Utils/server/verifyTokenwithAuth";
import { NextResponse } from "next/server";

// export async function POST(request: any, { params: { id } }: any) {
//   // Get Path from request
//   const User_ID = await jwtMiddleware(request);
//   const body = await request.json();

//   if (!User_ID) {
//     return NextResponse.json(
//       { message: "User not logged in" },
//       { status: 401 }
//     );
//   } else {
//     // const fetched_user = await usersRepo.getById(User_ID);
//     const res = await userInvestmentsRepo.UpdateInvestmentDataBudget(id, body);
//     return NextResponse.json(res, { status: 200 });
//   }
// }

export async function GET(request: any, { params: { id } }: any) {
  try {
    await jwtMiddleware(request);
    const User_ID = await usersRepo.getCurrent();
    if (!User_ID) {
      return NextResponse.json(
        { message: "User not logged in" },
        { status: 401 }
      );
    }
    const res = await userInvestmentsRepo.getInvestmentDataBudget(id);
    return NextResponse.json(res, { status: 200 });
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
    if (!User_ID) {
      return NextResponse.json(
        { message: "User not logged in" },
        { status: 401 }
      );
    } else {
      const res = await userInvestmentsRepo.getInvestmentDataBudget(id);
      return NextResponse.json(res, { status: 200 });
    }
  }
}
