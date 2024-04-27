import React from 'react'
import '../App.css'

function DisplayContent({ transactions }) {

    return (
        <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((expense, index) => (
            <tr key={index}>
              <td>{expense.Date}</td>
              <td>{expense.Descrition}</td>
              <td>{expense.Category}</td>
              <td>{expense.Amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
}

export default DisplayContent;