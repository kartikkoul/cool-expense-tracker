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
                    prompt('Lets have the recent expenses details. Please enter the expenses for the years between 2018 to 2021!!🚀')
                }

            else{
                    newExpense= {
                        id : Math.random().toString(),
                        title : inputTitle,
                        date : new Date(inputDate),
                        amount : inputAmount
                }
                console.log(newExpense);
                props.setexpenses([newExpense, ...props.expenses]);
                props.setFilterYear([newExpense, ...props.filterYear]);
            }

        }

        else {
            if(inputTitle===''){
                prompt('Enter a title name to add new expense🚀');
            }
            if(inputAmount===''){
                prompt('Enter a amount to add new expense🚀');
            }
    
            if(inputDate===''){
                prompt('Select the proper date to add new expense🚀');
            }
        }

        
        
        


        setinputTitle('');
        setinputDate('');
        setinputAmount('');
        console.log('$150k+/year is not so far!! 🚀')
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
