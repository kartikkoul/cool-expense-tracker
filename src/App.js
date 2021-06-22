
import './App.css';
import Expenses from './myComponents/Expenses';

function App() {

  const expenseObj = [
        {
            sno : 1,
            title : 'MacBook Pro',
            date : new Date(2021, 6, 22),
            amount : 2695.18
        },
        {
            sno : 2,
            title : 'MacBook Pro',
            date : new Date(2021, 6, 22),
            amount : 2695.18
        },
        {
            sno : 3,
            title : 'MacBook Pro',
            date : new Date(2021, 6, 22),
            amount : 2695.18
        },
    ]

  return (
    <div className="webApp">
      <Expenses expenseObj={expenseObj}/>
    </div>
  );
}

export default App;
