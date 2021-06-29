import React from 'react'
import Expense from './Expense'
import './Expenses.css'

const Expenses = (props) => {
    return (
        <div className="expensesOuter">
            <div className="expensesInner">
                {props.filterYear.length>0?
                    props.filterYear.map(e=><Expense key={e.id} expenseObj={e}/>)
                    :"Oops! No expenses found for this year !!"} 
            </div>
        </div>
    )
}

export default Expenses 
