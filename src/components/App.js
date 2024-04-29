import Transactions from '../data/Transactions'
import '../App.css';
import DisplayContent from './DisplayContent';
import { useState } from 'react';
import AddTransaction from './AddTransaction';

function App() {
const [transactions,setTransactions] = useState(Transactions)

const handleAdd = (newTransaction) => {
  setTransactions([...transactions,newTransaction])
}

  return (
    <div className="App">
      <h1 className='header'>The Royal Bank of Flatiron</h1>
      <AddTransaction onAddTransaction = {handleAdd}/>
      <DisplayContent transactions = {transactions}/>
    </div>
  );
}

export default App;
