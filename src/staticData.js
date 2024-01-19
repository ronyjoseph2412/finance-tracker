import IncomeLogo from "@/Assets/Income1.gif";
import InvestmentsLogo from "@/Assets/Investments1.gif";
import ExpensesLogo from "@/Assets/Expenses.gif";
const staticData = {
  dashboardPage: {
    message: "Welcome back, ",
    overview:"Here's an overview of your finances for ",
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
        path: "/",
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
        path: "/settings",
      },
    ],
  },
};

export default staticData;
