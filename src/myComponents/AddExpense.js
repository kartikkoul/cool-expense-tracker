import React from 'react'
import './AddExpense.css'
const AddExpense = () => {

    const addNewExpense = (e) =>{
        e.preventDefault();
        console.log('$150k+/year is not so far!! 🚀')
    }

    return (
        <div className="addExpenseOuter">
            <div className="addExpenseInner">
                <form onSubmit={addNewExpense}>
                    <div className="inputs">
                        <input type="text" placeholder="TITLE"/>
                        <input type="number" placeholder="Amount"/>
                        <input type="date"/>
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
