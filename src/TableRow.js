import React from "react";
import "./App.css";

const TableRow = ({ word, count }) => {
  return (
    <>
      <table className="tableRow__table">
        <tr className="tableRow__tr">
          <td className="tableRow__td">{word}</td>
          <td className="tableRow__td">{count}</td>
        </tr>
      </table>
    </>
  );
};

export default TableRow;
