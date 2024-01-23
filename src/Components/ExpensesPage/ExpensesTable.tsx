// components/ExpenseTable.tsx
"use client";
import React from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Button,
} from "@mui/material";

interface Expense {
  date: string;
  business: string;
  tags: string;
  amount: number;
}

interface ExpenseTableProps {
  data: Expense[];
}

const ExpenseTable: React.FC<ExpenseTableProps> = ({ data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    state,
    setGlobalFilter,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
  } = useTable<Expense>(
    {
      columns: [
        { Header: "Date of Transaction", accessor: "date" },
        { Header: "Person/Merchant", accessor: "business" },
        { Header: "Category", accessor: "tags" },
        { Header: "Amount", accessor: "amount" },
      ],
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { globalFilter, pageIndex } = state;

  return (
    <div>
      {/* <TextField
        label="Search"
        variant="outlined"
        value={globalFilter || ""}
        onChange={(e) => setGlobalFilter(e.target.value)}
        style={{ margin: "16px 0" }}
      /> */}

      <TableContainer component={Paper}>
        <Table {...getTableProps()} size="small">
          <TableHead>
            {headerGroups.map((headerGroup) => (
              <TableRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <TableCell
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    {column.render("Header")}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " 🔽"
                          : " 🔼"
                        : ""}
                    </span>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <TableRow {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <TableCell {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </TableCell>
                  ))}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      {/* <div style={{ marginTop: "16px", textAlign: "right" }}>
        <Button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </Button>{" "}
        <Button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </Button>{" "}
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {Math.ceil(data.length / 50)}
          </strong>{" "}
        </span>
      </div> */}
    </div>
  );
};

export default ExpenseTable;
