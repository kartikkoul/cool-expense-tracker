import React from 'react'
import Expense from './Expense'
import './Expenses.css'

const Expenses = () => {
    return (
        <div className="expensesOuter">
            <div className="expensesInner">
                <Expense/>
            </div>
        </div>
    )
}

export default Expenses
