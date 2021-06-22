import React from 'react'
import Expense from './Expense'
import './Expenses.css'

const Expenses = (props) => {
    return (
        <div className="expensesOuter">
            <div className="expensesInner">
                <Expense expenseObj={props.expenseObj[0]}/>
                <Expense expenseObj={props.expenseObj[1]}/>
                <Expense expenseObj={props.expenseObj[2]}/>
            </div>
        </div>
    )
}

export default Expenses
