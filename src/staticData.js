const staticData = {
  dashboardPage: {
    message: "Welcome back, ",
    options: ["Income", "Expenses", "Savings"],
  },
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
