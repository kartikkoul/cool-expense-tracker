import React from 'react'
import Expense from './Expense'
import './Expenses.css'

const Expenses = (props) => {
    return (
        <div className="expensesOuter">
            <div className="expensesInner">
                {props.filterYear.length>0?
                    props.filterYear.map(e=><Expense key={e.id} expenseObj={e}/>)
                    :"<h1>Oops! No expenses found for this year !!</h1>"}
            </div>
        </div>
    )
}

export default Expenses 
