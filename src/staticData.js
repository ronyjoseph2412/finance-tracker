import IncomeLogo from "@/Assets/Income1.gif";
import InvestmentsLogo from "@/Assets/Investments1.gif";
import ExpensesLogo from "@/Assets/Expenses.gif";
const staticData = {
  currentUserBankAccounts: [
    {
      name: "Federal Bank",
    },
    {
      name: "SBI Bank",
    },
    {
      name: "Jio Payments Bank",
    },
    {
      name: "Cash in Hand",
    },
  ],
  dashboardPage: {
    message: "Welcome back, ",
    overview: "Here's an overview of your finances for ",
    options: ["Income", "Expenses", "Savings"],
  },
  transactionsFilterOptions: [
    "This Week",
    "This Month",
    "Last Month",
    "Last 6Mnths",
    "Last 1 Yr",
    "Custom Range",
  ],
  trackerCards: [
    {
      key: "Income",
      assets: IncomeLogo,
    },
    {
      key: "Expenses",
      assets: ExpensesLogo,
    },
    {
      key: "Investments",
      assets: InvestmentsLogo,
    },
  ],
  navbar: {
    options: [
      {
        name: "Dashboard",
        type: "link",
        path: "/dashboard",
      },
      {
        type: "link",
        name: "Expenses",
        path: "/expenses",
      },
      {
        type: "link",
        name: "Investments",
        path: "/investments",
      },
      {
        type: "dropdown",
        name: "Profile",
        path: "/profile",
      },
    ],
  },
  investmentsPage: {
    message: "Investments",
    options: ["Mutual Funds", "Stocks", "Fixed Deposits", "Bonds", "Others"],
    trackerCards: [
      {
        key: "Total Investments",
        assets: InvestmentsLogo,
      },
      {
        key: "Current Value",
        assets: InvestmentsLogo,
      },
      {
        key: "Total Profit/Loss",
        assets: InvestmentsLogo,
      },
    ],
  },
};

export default staticData;
