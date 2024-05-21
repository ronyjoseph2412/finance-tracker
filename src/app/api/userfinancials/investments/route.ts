import { usersRepo } from "@/Utils/server";
import { jwtMiddleware } from "@/Utils/server/api";
import { userInvestmentsRepo } from "@/Utils/server/userInvestments-repo";
import { userFinancialsRepo } from "@/Utils/server/usersFinancials-repo";
import { verifyTokenwithAuth } from "@/Utils/server/verifyTokenwithAuth";
import { NextResponse } from "next/server";

export async function GET(request: any) {
  // Get Path from request
  try {
    await jwtMiddleware(request);
    const User_ID = await usersRepo.getCurrent();
    const fetched_user = User_ID.username;
    if (!User_ID) {
      return NextResponse.json(
        { message: "User not logged in" },
        { status: 401 }
      );
    }
    const UserFinancialData = await userFinancialsRepo.getUserFinancialData(
      fetched_user
    );
    const userBudgetData = UserFinancialData.budgetData;
    // userBudgetData.forEach(async (budget: any) => {
    //   const investmentData = await userInvestmentsRepo.getInvestmentDataBudget(
    //     budget.investment_id
    //   );
    //   console.log(investmentData, "investmentData");
    //   budget.investmentData = investmentData.investmentsData;
    // });

    const structuredData = await userBudgetData.map(async (budget: any) => {
      const investmentData = await userInvestmentsRepo.getInvestmentDataBudget(
        budget.investment_id
      );
      return {
        ...budget,
        investmentData: investmentData.investmentsData,
      };
    });

    return NextResponse.json(structuredData, { status: 200 });
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
    // const fetched_user = User_ID.username;
    const UserFinancialData = await userFinancialsRepo.getUserFinancialData(
      User_ID
    );
    const userBudgetData = UserFinancialData.budgetData;
    userBudgetData.forEach(async (budget: any) => {
      const investmentData = await userInvestmentsRepo.getInvestmentDataBudget(
        budget.investment_id
      );
      budget.investmentData = investmentData;
    });

    return NextResponse.json(userBudgetData, { status: 200 });
  }
}
