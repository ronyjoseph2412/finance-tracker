"use client";
import React, { useEffect } from "react";
import { useTable } from "react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useAppSelector } from "@/lib/hooks";
import { filterTransactionsbyDate } from "@/Utils/DatefilterTransactions";
import staticData from "@/staticData";
import { timeStampedData } from "@/Utils/timeStampedData";
import { sortAllTransactions } from "@/Utils/sortTransactions";

interface Transaction {
  date: string;
  payee: string;
  note: string;
  category: string;
  amount: number;
  bankName: string;
}

interface Props {
  data: Transaction[];
}

const useStyles = makeStyles({
  root: {
    width: "100%",
    overflowX: "auto",
    height: "100%",
    overflowY: "scroll",
    boxShadow: "none",
    border: "none",
  },
});

const ExpensesTable: React.FC<Props> = ({ data }) => {
  const { startDate, endDate, currentFilter } = useAppSelector(
    (state) => state.transactionsReducer
  );

  const startTimestamp = startDate ? startDate * 1000 : null;
  const exndTimestamp = endDate ? endDate * 1000 : new Date().getTime();

  let timestampedData = data.map((item: any) => {
    return {
      ...item,
      date: new Date(item.date).getTime(),
    };
  });

  const [expenditureData, setExpenditureData] = React.useState<Transaction[]>(
    []
  );

  useEffect(() => {
    const filteredData = filterTransactionsbyDate(
      timestampedData,
      currentFilter === staticData.transactionsFilterOptions[0] ? true : false,
      startTimestamp,
      exndTimestamp
    );
    setExpenditureData(filteredData);
  }, [data, startDate, endDate]);

  const columns = React.useMemo(
    () => [
      { Header: "Date", accessor: "date" },
      { Header: "Payee", accessor: "payee" },
      { Header: "Category", accessor: "category" },
      { Header: "Amount", accessor: "amount" },
    ],
    []
  );

  const cellStyle = {
    fontSize: "13px", // Adjust the font size as needed
  };

  const classes = useStyles();
  const { getTableProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data: timeStampedData(sortAllTransactions(expenditureData, "Date"), true),
  });

  return (
    <>
      {expenditureData.length !== 0 ? (
        <TableContainer component={Paper} className={classes.root}>
          <Table {...getTableProps()}>
            <TableHead>
              {headerGroups.map((headerGroup) => (
                <TableRow {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <TableCell {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableHead>
            <TableBody>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <TableRow {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <TableCell {...cell.getCellProps()} style={cellStyle}>
                          {cell.render("Cell")}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <div>No Data</div>
      )}
    </>
  );
};

export default ExpensesTable;
