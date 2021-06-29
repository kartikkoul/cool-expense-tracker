import {useState} from 'react';
import './App.css';
import Expenses from './myComponents/expensesListSection/Expenses';
import AddExpense from './myComponents/addExpenseSection/AddExpense';
import ExpenseChart from './myComponents/expensesListSection/ExpenseChart';

function App() {

  const DUMMY_EXPENSES_DATA = [
        {
            id : '1',
            title : 'MacBook Pro',
            date : new Date(2021, 7, 22),
            amount : 2695.18
        },
        {
            id : '2',
            title : 'Less Ass LG Monitor',
            date : new Date(2021, 6, 22),
            amount : 1049.97
        },
        {
            id : '3',
            title : 'Big Ass LG Monitor',
            date : new Date(2021, 7, 22),
            amount : 1299.00
        },
        {
            id : '4',
            title : 'Projector',
            date : new Date(2020, 8, 22),
            amount : 399.00
        },
        {
          id : '5',
          title : 'PS5',
          date : new Date(2019, 7, 22),
          amount : 499.00
      },
    ]

   

    const [expenses, setexpenses] = useState(DUMMY_EXPENSES_DATA);
    const [filterYear, setfilterYear] = useState(expenses);

    // const debugHandler = () => {
    //   console.log(expenses);
    //   console.log(filterYear);
    // }
    

  return (
    <div className="webApp">
      {/* <button onClick={debugHandler} className="debugButton">Debug</button> */}
      <AddExpense expenses={expenses} setexpenses={setexpenses} filterYear={filterYear} setFilterYear={setfilterYear}/>
      <ExpenseChart expenses={expenses} filterYear={filterYear} setFilterYear={setfilterYear}/>
      <Expenses expenseObj={expenses} filterYear={filterYear}/>


      <footer style={{
        position:'relative',
        bottom:0,
        width:'95%',
        height:'33px',
        'margin-top':'1.9%',
        marginBottom:'2px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
      }}>
        <p>Made with Love💖 and Coffee☕ by <a href="https://www.github.com/kartikkoul/cool-expense-tracker/" target="_blank">Kartik Koul</a></p>
      </footer>
    </div>

  );
}

export default App;
