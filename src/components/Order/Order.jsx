import React from "react";

const Order = ({ title, count, price, status, date }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>id</th>
          <th>phone</th>
          <th>count</th>
          <th>price</th>
          <th>status</th>
          <th>date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>a</td>
          <td>b</td>
          <td>c</td>
          <td>b</td>
          <td>c</td>
          <td>c</td>
        </tr>
        <tr>
          <td>a</td>
          <td>b</td>
          <td>c</td>
          <td>c</td>
          <td>c</td>
          <td>c</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Order;
