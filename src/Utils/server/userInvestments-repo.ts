import { ObjectId } from "mongodb";
import { db } from ".";
import { NextResponse } from "next/server";

const UserInvestments = db.UserInvestments;
export const userInvestmentsRepo = {
  createInvestment,
  UpdateInvestmentDataBudget,
  getInvestmentDataBudget,
};

async function createInvestment(investment_id: ObjectId) {
  const userInvestmentsData = await UserInvestments.create({
    investment_id: investment_id,
  });
  await userInvestmentsData.save();
}

async function UpdateInvestmentDataBudget(
  investment_id: ObjectId,
  investmentData: any
) {
  const UserInvestmentData = await UserInvestments.findOne({
    investment_id: investment_id,
  });
  UserInvestmentData.investmentsData.push(investmentData);
  await UserInvestmentData.save();
  return UserInvestmentData;
}

async function getInvestmentDataBudget(investment_id: ObjectId) {
  const UserInvestmentData = await UserInvestments.findOne({
    investment_id: investment_id,
  });
  if (!UserInvestmentData) {
    return {
      message: "No Investment Data Found",
    };
  }
  return UserInvestmentData;
}
