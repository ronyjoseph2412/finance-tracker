// components/StockTable.tsx
"use client";
import React from "react";
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

interface Stock {
  type: string;
  name: string;
  amount: number;
  description: string;
  date: number;
}

interface Props {
  data: Stock[];
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

const cellStyle = {
  fontSize: "13px", // Adjust the font size as needed
};
const StockTable: React.FC<Props> = ({ data }) => {
  const columns = React.useMemo(
    () => [
      { Header: "Date", accessor: "date" },
      { Header: "Type", accessor: "type" },
      { Header: "Name", accessor: "name" },
      { Header: "Amount", accessor: "amount" },
      { Header: "Description", accessor: "description" },
    ],
    []
  );

  const classes = useStyles();

  const { getTableProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  return (
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
              <TableRow {...row.getRowProps()} key={row.id}>
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
  );
};

export default StockTable;
