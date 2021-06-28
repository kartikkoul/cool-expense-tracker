import {useState} from 'react';
import './App.css';
import Expenses from './myComponents/Expenses';
import AddExpense from './myComponents/AddExpense';

function App() {

  const DUMMY_EXPENSES_DATA = [
        {
            sno : 1,
            title : 'MacBook Pro',
            date : new Date(2024, 6, 22),
            amount : 2695.18
        },
        {
            sno : 2,
            title : 'Less Ass LG Monitor',
            date : new Date(2026, 6, 22),
            amount : 1049.97
        },
        {
            sno : 3,
            title : 'Big Ass LG Monitor',
            date : new Date(2027, 6, 22),
            amount : 1299.00
        },
    ]

   

    const [expenses, setexpenses] = useState(DUMMY_EXPENSES_DATA)
    
    const debugHandler = () => {
      console.log(expenses);
    }
    

  return (
    <div className="webApp">
      <button onClick={debugHandler} className="debugButton">Debug</button>
      <AddExpense expenses={expenses} setexpenses={setexpenses}/>
      <Expenses expenseObj={expenses}/>
    </div>

  );
}

export default App;
