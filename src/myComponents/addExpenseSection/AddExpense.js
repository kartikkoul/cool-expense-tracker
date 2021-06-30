import React, {useState} from 'react'
import './AddExpense.css'
const AddExpense = (props) => {

    const [inputTitle, setinputTitle] = useState('');
    const [inputAmount, setinputAmount] = useState('');
    const [inputDate, setinputDate] = useState('');


    const titleChangeHandler = (e) => {
        setinputTitle(e.target.value);
    }

    const amountChangeHandler =(e) => {
        setinputAmount(e.target.value);
    }

    const dateChangeHandler = (e) => {
        setinputDate(e.target.value);
    }


    const addNewExpense = (e) =>{
        e.preventDefault();

        let newExpense = {};

        if(inputTitle!==''&&inputDate!==''&&inputAmount!==''){
            const inputDateCheck = new Date(inputDate);
            if(inputDateCheck.getFullYear()<2018||inputDateCheck.getFullYear()>2021){
                    alert('Lets have the recent expenses details. Please enter the expenses for the years between 2018 to 2021!!🚀')
                }

            else{
                    newExpense= {
                        id : Math.random().toString(),
                        title : inputTitle,
                        date : inputDate,
                        amount : inputAmount,
                }
                
                props.setexpenses([newExpense, ...props.expenses]);
                props.setFilterYear([newExpense, ...props.filterYear]);
            }

        }

        else {
            if(inputTitle===''){
                alert('Enter a title name to add new expense🚀');
            }
            else if(inputAmount===''){
                alert('Enter a amount to add new expense🚀');
            }
    
            else{
                alert('Select a date to add new expense🚀');
            }
        }

        
        
        


        setinputTitle('');
        setinputDate('');
        setinputAmount('');
    }

    return (
        <div className="addExpenseOuter">
            <div className="addExpenseInner">
                <form onSubmit={addNewExpense}>
                    <div className="inputs">
                        <input type="text" value={inputTitle} placeholder="Title" onChange={titleChangeHandler}/>
                        <input type="number" value={inputAmount} placeholder="Amount" onChange={amountChangeHandler}/>
                        <input type="date" value={inputDate} onChange={dateChangeHandler}/>
                    </div>

                    <div className="buttonArea">
                    <button className="addExpenseButton" type='submit'>ADD NEW EXPENSE</button>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}

export default AddExpense
