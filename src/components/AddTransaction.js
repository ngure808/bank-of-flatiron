import { useState } from 'react'

function AddTransaction({ onAddTransaction }) {
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (date === '' || description === '' || category === '' || amount === NaN) {
        alert('Please fill out all fields');
        return; // Exit the function if any field is empty
      }
  
      const newTransaction = { date, description, category, amount };
      onAddTransaction(newTransaction);
  
      // Clear the form fields after submission
      setDate('');
      setDescription('');
      setCategory('');
      setAmount('');
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type='date'
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type='text'
          placeholder='Description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type='text'
          placeholder='Category'
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type='number'
          placeholder='Amount'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type='submit'>Add Transaction</button>
      </form>
    );
  }
  
  export default AddTransaction;