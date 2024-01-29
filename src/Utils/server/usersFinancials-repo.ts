import { ObjectId } from "mongodb";
import { db } from "./db";
import { userInvestmentsRepo } from "./userInvestments-repo";
const UserFinancials = db.UserFinancials;

export const userFinancialsRepo = {
  getUserFinancialData,
  updateIncomeData,
  updateExpenseData,
  createBudget,
  
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

async function updateExpenseData(username: string, expenseData: any) {
  var regex = new RegExp(username, "i"),
    query = { username: regex };
  const UserFinancialData = await UserFinancials.findOne(query);
  UserFinancialData.expensesData.push(expenseData);
  await UserFinancialData.save();
  return UserFinancialData;
}

async function createBudget(username: string, budget: any) {
  var regex = new RegExp(username, "i"),
    query = { username: regex };
  const UserFinancialData = await UserFinancials.findOne(query);
  const investment_id = new ObjectId();
  budget.investment_id = investment_id;
  UserFinancialData.budgetData.push(budget);
  await userInvestmentsRepo.createInvestment(investment_id);
  await UserFinancialData.save();
  return UserFinancialData;
}

