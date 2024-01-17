const staticData = {
  dashboardPage: {
    message: "Welcome back, ",
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
