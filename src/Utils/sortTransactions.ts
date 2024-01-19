export const sortAllTransactions = (
  transactions: {
    date: number;
    business: string;
    tags: string;
    amount: number;
  }[],
  sortBy: string
) => {
  switch (sortBy) {
    case "Date":
      let sortedTransaction = transactions.sort((a, b) => {
        if (a.date > b.date) return -1;
        if (a.date < b.date) return 1;
        return 0;
      });
      return sortedTransaction;

    // case "Amount":
    //   return (a, b) => {
    //     if (a.amount > b.amount) return -1;
    //     if (a.amount < b.amount) return 1;
    //     return 0;
    //   };
    default:
      sortedTransaction = transactions.sort((a, b) => {
        if (a.date > b.date) return -1;
        if (a.date < b.date) return 1;
        return 0;
      });
      return sortedTransaction;
  }
};
