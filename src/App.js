import {useState, useEffect} from 'react';
import './App.css';
import Expenses from './myComponents/expensesListSection/Expenses';
import AddExpense from './myComponents/addExpenseSection/AddExpense';
import ExpenseChart from './myComponents/expensesListSection/ExpenseChart';

function App() {
  // const DUMMY_EXPENSES_DATA = [
  //       {
  //           id : '1',
  //           title : 'MacBook Pro',
  //           date : '2021-07-22',
  //           amount : 2695.18
  //       },
  //       {
  //           id : '2',
  //           title : 'Less Ass LG Monitor',
  //           date : '2021-06-22',
  //           amount : 1049.97
  //       },
  //       {
  //           id : '3',
  //           title : 'Big Ass LG Monitor',
  //           date : '2021-07-22',
  //           amount : 1299.00
  //       },
  //       {
  //           id : '4',
  //           title : 'Projector',
  //           date : '2020-07-22',
  //           amount : 399.00
  //       },
  //       {
  //         id : '5',
  //         title : 'PS5',
  //         date : '2019-07-22',
  //         amount : 499.00
  //     },
  //   ]

    const getLocalItems = () =>{
      let list = localStorage.getItem('localExpenses');

      if(list){
        return JSON.parse(localStorage.getItem('localExpenses'));
      }
      else{
        return [];
      }
    }


    const [expenses, setexpenses] = useState(getLocalItems());
    const [filterYear, setfilterYear] = useState(expenses);

    useEffect(() => { 
      localStorage.setItem("localExpenses", JSON.stringify(expenses))
    }, [expenses])



    // const debugHandler = () =>
    //   console.log(expenses);
    //   console.log(filterYear);
    // }
    

  return (
    <div className="webApp">
      <footer style={{
        position:'relative',
        top:0,
        width:'95%',
        height:'33px',
        marginTop:'2px',
        marginBottom:'1%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
      }}>
        <p>Made with Love💖 and Coffee☕ by <a href="https://www.github.com/kartikkoul/cool-expense-tracker/" target="_blank" rel="noreferrer" >Kartik Koul</a> 🚀</p>
      </footer>
      <div className="appContent">
         {/* <button onClick={debugHandler} className="debugButton">Debug</button> */}
        <AddExpense expenses={expenses} setexpenses={setexpenses} filterYear={filterYear} setFilterYear={setfilterYear}/>
        <ExpenseChart expenses={expenses} filterYear={filterYear} setFilterYear={setfilterYear}/>
        <Expenses expenseObj={expenses} expenses={expenses} setexpenses={setexpenses} filterYear={filterYear} setFilterYear={setfilterYear}/>
      </div>
    </div>

  );
}

export default App;
