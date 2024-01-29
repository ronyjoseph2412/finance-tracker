// Date("2024-01-20").toLocaleDateString()

const tempData = {
  firstName: "Rony",
  lastName: "Joseph",
  incomes: [
    {
      type: "Salary",
      description: "Regular monthly income from employment",
      frequency: "Monthly",
      amount: 5000,
    },
    {
      type: "Freelance",
      description: "Income from freelance work or gigs",
      frequency: "Irregular",
      amount: 800,
    },
    {
      type: "Investment",
      description: "Income generated from investments",
      frequency: "Quarterly",
      amount: 300,
    },
    {
      type: "Business",
      description: "Profit earned from a business venture",
      frequency: "Varies",
      amount: 2500,
    },
    {
      type: "Rental",
      description: "Income from renting out property or assets",
      frequency: "Monthly",
      amount: 600,
    },
    {
      type: "Bonus",
      description: "Additional one-time bonus income",
      frequency: "Yearly",
      amount: 1000,
    },
    {
      type: "Side Hustle",
      description: "Income earned from a part-time or side hustle",
      frequency: "Varies",
      amount: 300,
    },
  ],
  investmentData: [
    {
      type: "Mutual Funds",
      investments: [
        {
          name: "Mutual Fund X",
          totalCurrentValue: 15000,
          quantity: 200,
          investmentsData: [
            {
              investedAmount: 10000,
              investedQuantity: 100,
              timeofInvestment: new Date("2021-01-01").getTime(),
            },
            {
              investedAmount: 12000,
              investedQuantity: 100,
              timeofInvestment: new Date("2021-03-01").getTime(),
            },
          ],
        },
      ],
    },
    {
      type: "Stocks",
      investments: [
        {
          name: "Stock A",
          totalCurrentValue: 3500,
          quantity: 100,
          investmentsData: [
            {
              investedAmount: 10000,
              investedQuantity: 50,
              timeofInvestment: new Date("2021-01-01").getTime(),
            },
            {
              investedAmount: 20000,
              investedQuantity: 50,
              timeofInvestment: new Date("2021-02-01").getTime(),
            },
          ],
        },
        {
          name: "Stock B",
          totalCurrentValue: 30000,
          quantity: 100,
          investmentsData: [
            {
              investedAmount: 10000,
              investedQuantity: 50,
              timeofInvestment: new Date("2021-01-01").getTime(),
            },
            {
              investedAmount: 20000,
              investedQuantity: 50,
              timeofInvestment: new Date("2021-02-01").getTime(),
            },
          ],
        },
        // Add more stocks as needed
      ],
    },
    {
      type: "Fixed Deposits",
      investments: [
        {
          name: "FD 1",
          totalCurrentValue: 12000,
          quantity: 1,
          investmentsData: [
            {
              investedAmount: 10000,
              investedQuantity: 1,
              timeofInvestment: new Date("2021-04-01").getTime(),
            },
          ],
        },
        // Add more fixed deposits as needed
      ],
    },
    {
      type: "Bonds",
      investments: [
        {
          name: "Bond X",
          totalCurrentValue: 8000,
          quantity: 2,
          investmentsData: [
            {
              investedAmount: 5000,
              investedQuantity: 1,
              timeofInvestment: new Date("2021-02-01").getTime(),
            },
            {
              investedAmount: 3000,
              investedQuantity: 1,
              timeofInvestment: new Date("2021-03-01").getTime(),
            },
          ],
        },
        // Add more bonds as needed
      ],
    },
    {
      type: "Others",
      investments: [
        {
          name: "Other Investment Y",
          totalCurrentValue: 5000,
          quantity: 1,
          investmentsData: [
            {
              investedAmount: 3000,
              investedQuantity: 1,
              timeofInvestment: new Date("2021-05-01").getTime(),
            },
          ],
        },
        // Add more other investments as needed
      ],
    },
  ],
  expenditureData: [
    {
      date: new Date("2023-08-01").getTime(),
      business: "Company A",
      tags: "Groceries",
      amount: 50,
    },
    {
      date: new Date("2023-08-02").getTime(),
      business: "Company B",
      tags: "Utilities",
      amount: 100,
    },
    {
      date: new Date("2023-08-03").getTime(),
      business: "Person A",
      tags: "Food",
      amount: 30,
    },
    {
      date: new Date("2023-08-04").getTime(),
      business: "Company C",
      tags: "Technology",
      amount: 150,
    },
    {
      date: new Date("2023-08-05").getTime(),
      business: "Person B",
      tags: "Gifts",
      amount: 80,
    },
    {
      date: new Date("2023-08-06").getTime(),
      business: "Company A",
      tags: "Groceries",
      amount: 70,
    },
    {
      date: new Date("2023-08-07").getTime(),
      business: "Person C",
      tags: "Food",
      amount: 40,
    },
    {
      date: new Date("2023-08-08").getTime(),
      business: "Company B",
      tags: "Utilities",
      amount: 120,
    },
    {
      date: new Date("2023-08-09").getTime(),
      business: "Person A",
      tags: "Food",
      amount: 60,
    },
    {
      date: new Date("2023-08-10").getTime(),
      business: "Company C",
      tags: "Technology",
      amount: 200,
    },
    {
      date: new Date("2023-08-11").getTime(),
      business: "Person B",
      tags: "Gifts",
      amount: 25,
    },
    {
      date: new Date("2023-08-12").getTime(),
      business: "Company A",
      tags: "Groceries",
      amount: 90,
    },
    {
      date: new Date("2023-08-13").getTime(),
      business: "Person C",
      tags: "Food",
      amount: 35,
    },
    {
      date: new Date("2023-08-13").getTime(),
      business: "Company D",
      tags: "Clothing",
      amount: 65,
    },
    {
      date: new Date("2023-08-13").getTime(),
      business: "Person E",
      tags: "Entertainment",
      amount: 40,
    },
    {
      date: new Date("2023-08-14").getTime(),
      business: "Company B",
      tags: "Utilities",
      amount: 80,
    },
    {
      date: new Date("2023-08-15").getTime(),
      business: "Person A",
      tags: "Gifts",
      amount: 50,
    },
    {
      date: new Date("2023-08-15").getTime(),
      business: "Company D",
      tags: "Technology",
      amount: 90,
    },
    {
      date: new Date("2023-08-15").getTime(),
      business: "Person E",
      tags: "Dining",
      amount: 35,
    },
    {
      date: new Date("2023-08-16").getTime(),
      business: "Company C",
      tags: "Technology",
      amount: 110,
    },
    {
      date: new Date("2023-08-17").getTime(),
      business: "Person B",
      tags: "Food",
      amount: 45,
    },
    {
      date: new Date("2023-08-17").getTime(),
      business: "Company D",
      tags: "Furniture",
      amount: 120,
    },
    {
      date: new Date("2023-08-17").getTime(),
      business: "Person E",
      tags: "Gifts",
      amount: 60,
    },
    {
      date: new Date("2023-08-18").getTime(),
      business: "Company A",
      tags: "Groceries",
      amount: 75,
    },
    {
      date: new Date("2023-08-19").getTime(),
      business: "Person C",
      tags: "Gifts",
      amount: 130,
    },
    {
      date: new Date("2023-08-20").getTime(),
      business: "Company B",
      tags: "Utilities",
      amount: 180,
    },
    {
      date: new Date("2023-08-21").getTime(),
      business: "Person A",
      tags: "Food",
      amount: 40,
    },
    {
      date: new Date("2023-08-22").getTime(),
      business: "Company C",
      tags: "Technology",
      amount: 65,
    },
    {
      date: new Date("2023-08-23").getTime(),
      business: "Person B",
      tags: "Gifts",
      amount: 55,
    },
    {
      date: new Date("2023-08-24").getTime(),
      business: "Company A",
      tags: "Groceries",
      amount: 95,
    },
    {
      date: new Date("2023-08-25").getTime(),
      business: "Person C",
      tags: "Technology",
      amount: 120,
    },
    {
      date: new Date("2023-08-26").getTime(),
      business: "Company B",
      tags: "Utilities",
      amount: 70,
    },
    {
      date: new Date("2023-08-27").getTime(),
      business: "Person A",
      tags: "Gifts",
      amount: 85,
    },
    {
      date: new Date("2023-08-28").getTime(),
      business: "Company C",
      tags: "Technology",
      amount: 55,
    },
    {
      date: new Date("2023-08-29").getTime(),
      business: "Person B",
      tags: "Food",
      amount: 90,
    },
    {
      date: new Date("2023-08-30").getTime(),
      business: "Company A",
      tags: "Groceries",
      amount: 40,
    },
    {
      date: new Date("2023-08-31").getTime(),
      business: "Person C",
      tags: "Entertainment",
      amount: 75,
    },
    {
      date: new Date("2023-09-01").getTime(),
      business: "Company B",
      tags: "Healthcare",
      amount: 110,
    },
    {
      date: new Date("2023-09-02").getTime(),
      business: "Person D",
      tags: "Education",
      amount: 95,
    },
    {
      date: new Date("2023-09-03").getTime(),
      business: "Company A",
      tags: "Furniture",
      amount: 120,
    },
    {
      date: new Date("2023-09-13").getTime(),
      business: "Person E",
      tags: "Dining",
      amount: 45,
    },
    {
      date: new Date("2023-09-13").getTime(),
      business: "Company F",
      tags: "Travel",
      amount: 100,
    },
    {
      date: new Date("2023-09-15").getTime(),
      business: "Person B",
      tags: "Technology",
      amount: 80,
    },
    {
      date: new Date("2023-09-15").getTime(),
      business: "Company G",
      tags: "Groceries",
      amount: 60,
    },
    {
      date: new Date("2023-09-17").getTime(),
      business: "Person C",
      tags: "Food",
      amount: 55,
    },
    {
      date: new Date("2023-09-17").getTime(),
      business: "Company H",
      tags: "Gifts",
      amount: 120,
    },
    {
      date: new Date("2024-01-02").getTime(),
      business: "Company X",
      tags: "Utilities",
      amount: 120,
    },
    {
      date: new Date("2024-01-10").getTime(),
      business: "Person Y",
      tags: "Food",
      amount: 60,
    },
    {
      date: new Date("2024-01-15").getTime(),
      business: "Company Z",
      tags: "Technology",
      amount: 90,
    },

    // Transactions for This Month
    {
      date: new Date("2024-01-05").getTime(),
      business: "Company A",
      tags: "Groceries",
      amount: 70,
    },
    {
      date: new Date("2024-01-10").getTime(),
      business: "Person B",
      tags: "Gifts",
      amount: 50,
    },
    {
      date: new Date("2024-01-18").getTime(),
      business: "Company C",
      tags: "Technology",
      amount: 75,
    },
    {
      date: new Date("2024-01-01").getTime(),
      business: "Company A",
      tags: "Groceries",
      amount: 50,
    },
    {
      date: new Date("2024-01-02").getTime(),
      business: "Company B",
      tags: "Utilities",
      amount: 100,
    },
    {
      date: new Date("2024-01-03").getTime(),
      business: "Person C",
      tags: "Food",
      amount: 30,
    },
    {
      date: new Date("2024-01-04").getTime(),
      business: "Company D",
      tags: "Technology",
      amount: 150,
    },
    {
      date: new Date("2024-01-05").getTime(),
      business: "Person E",
      tags: "Gifts",
      amount: 80,
    },
    {
      date: new Date("2024-01-06").getTime(),
      business: "Company F",
      tags: "Groceries",
      amount: 70,
    },
    {
      date: new Date("2024-01-07").getTime(),
      business: "Person G",
      tags: "Food",
      amount: 40,
    },
    {
      date: new Date("2024-01-08").getTime(),
      business: "Company H",
      tags: "Utilities",
      amount: 120,
    },
    {
      date: new Date("2024-01-09").getTime(),
      business: "Person I",
      tags: "Food",
      amount: 60,
    },
    {
      date: new Date("2024-01-10").getTime(),
      business: "Company J",
      tags: "Technology",
      amount: 200,
    },
    {
      date: new Date("2024-01-11").getTime(),
      business: "Person K",
      tags: "Gifts",
      amount: 25,
    },
    {
      date: new Date("2024-01-12").getTime(),
      business: "Company L",
      tags: "Groceries",
      amount: 90,
    },
    {
      date: new Date("2024-01-13").getTime(),
      business: "Person M",
      tags: "Food",
      amount: 35,
    },
    {
      date: new Date("2024-01-14").getTime(),
      business: "Company N",
      tags: "Utilities",
      amount: 80,
    },
    {
      date: new Date("2024-01-15").getTime(),
      business: "Person O",
      tags: "Gifts",
      amount: 50,
    },
    {
      date: new Date("2024-01-16").getTime(),
      business: "Company P",
      tags: "Technology",
      amount: 110,
    },
    {
      date: new Date("2024-01-17").getTime(),
      business: "Person Q",
      tags: "Food",
      amount: 45,
    },
    {
      date: new Date("2024-01-18").getTime(),
      business: "Company R",
      tags: "Groceries",
      amount: 2075,
    },
  ],
};

export default tempData;
