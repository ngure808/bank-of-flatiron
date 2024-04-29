import React from 'react'
import '../App.css'
import SearchBar from './SearchBar';
import { useState } from 'react';

function DisplayContent({ transactions }) {

  const sort = transactions.slice().sort((a, b) => a.date.localeCompare(b.date));

  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder,setSortOrder] = useState('')

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = () => {
    setSortOrder(sortOrder === 'alphabetically' ? 'reverse' : 'alphabetically');
  };

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.category.toLowerCase().includes(searchTerm.toLowerCase())
  );


  const sortedTransactions = filteredTransactions.slice().sort((a, b) => {
    if (sortOrder === 'alphabetically') {
      return a.description.localeCompare(b.description);
    } else {
      return a.date.localeCompare(b.date) 
    }

  });

    return (
        <div>
            <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange}/>
            <button onClick={handleSort}>Sort({sortOrder === 'alphabetically' ? 'BY DATE' : 'A-Z'})</button>
            <div className='table-container'>
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
                    {sortedTransactions.map((expense, index) => (
                    <tr key={index}>
                        <td>{expense.date}</td>
                        <td>{expense.description}</td>
                        <td>{expense.category}</td>
                        <td>{expense.amount}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default DisplayContent;