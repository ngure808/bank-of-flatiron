import Transactions from '../data/Transactions'
import '../App.css';
import DisplayContent from './DisplayContent';

function App() {
  return (
    <div className="App">
      <h1 className='header'>The Royal Bank of Flatiron</h1>
      <DisplayContent transactions = {Transactions}/>
    </div>
  );
}

export default App;
