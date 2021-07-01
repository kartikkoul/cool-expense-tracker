import React, {useState} from 'react'
import './AddExpense.css'
const AddExpense = (props) => {

    const [inputTitle, setinputTitle] = useState('');
    const [inputAmount, setinputAmount] = useState('');
    const [inputDate, setinputDate] = useState('');
    const [isValid, setisValid] = useState(true);
    const [warning, setwarning] = useState('');

    const titleChangeHandler = (e) => {
        setinputTitle(e.target.value);
        setisValid(true)
    }

    const amountChangeHandler =(e) => {
        setinputAmount(e.target.value);
        setisValid(true)
    }

    const dateChangeHandler = (e) => {
        setinputDate(e.target.value);
        setisValid(true);
    }


    const addNewExpense = (e) =>{
        e.preventDefault();

        let newExpense = {};
        const inputDateCheck = new Date(inputDate)

        if(inputTitle.trim().length!==0&&inputDate!==''&&inputAmount.trim().length!==0&&(inputDateCheck.getFullYear()>=2018)&&(inputDateCheck.getFullYear()<=2021)){
                    newExpense= {
                        id : Math.random().toString(),
                        title : inputTitle,
                        date : inputDate,
                        amount : inputAmount,
                }
                
                props.setexpenses([newExpense, ...props.expenses]);
                props.setFilterYear([newExpense, ...props.filterYear]);
                setinputTitle('');
                setinputDate('');
                setinputAmount('');
        }

        else{
            setisValid(false);
            setwarning(
                () => {
                    if(inputTitle.trim().length===0){
                        return <p>Enter a title name to add new expense🚀</p>
                    }
                    else if(inputAmount.trim().length===0){
                        return <p>Enter a amount to add new expense🚀</p>
                    }

                    else if(inputDate===''){
                        return <p>Select a date to add new expense🚀</p>
                    }

                    else{
                        return <p>Lets have the recent expenses details. Please enter the expenses for the years between 2018 to 2021!!🚀</p>
                    }
                }
            )
        }
    } 

    return (
        <div className="addExpenseOuter">
            <div className="addExpenseInner">
                <form onSubmit={addNewExpense}>
                    <div className={`${!isValid?"warningAreaOuter":"hidden"}`}>
                        <div className={`warningArea ${!isValid?"warning":"hidden"}`}>
                            {warning}
                        </div>
                    </div>
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
