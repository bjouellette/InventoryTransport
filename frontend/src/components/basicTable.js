// code source from https://betterprogramming.pub/how-to-efficiently-display-data-in-tables-with-react-7e133bad5719

import React from "react";
import { useTable, usePagination } from "react-table";

export default function BasicTable({ columns, data }) {

  const {
    getTableProps, 
    getTableBodyProps, 
    headerGroups, 
    page, 
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    prepareRow 
  } = useTable(
    {
      columns,
      data,
      initialState: { pageSize: 2 }
    },
    usePagination
  );

  return (
    <div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={() => previousPage()} disabled={!canPreviousPage}>
        Previous page{" "}
      </button>
      <button onClick={() => nextPage()} disabled={!canNextPage}>
        Next page{" "}
      </button>
    </div>
  );
}
