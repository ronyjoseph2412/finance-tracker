import { db } from "./db";

const UserFinancials = db.UserFinancials;

export const userFinancialsRepo = {
  getUserFinancialData,
  updateIncomeData,
};

async function getUserFinancialData(username: string) {
  var regex = new RegExp(username, "i"),
    query = { username: regex };
  const res = await UserFinancials.findOne(query);
  return res;
}

async function updateIncomeData(username: string, incomeData: any) {
  var regex = new RegExp(username, "i"),
    query = { username: regex };
  const UserFinancialData = await UserFinancials.findOne(query);
  UserFinancialData.incomeData.push(incomeData);
  await UserFinancialData.save();
  return UserFinancialData;
}
