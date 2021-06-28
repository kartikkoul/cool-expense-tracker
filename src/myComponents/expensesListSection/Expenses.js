import React from 'react'
import Expense from './Expense'
import './Expenses.css'

const Expenses = (props) => {
    return (
        <div className="expensesOuter">
            <div className="expensesInner">
                {props.expenseObj.map(e=><Expense key={e.id} expenseObj={e}/>)}
            </div>
        </div>
    )
}

export default Expenses 
