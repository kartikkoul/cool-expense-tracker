import React from 'react'
import Expense from './Expense'
import './Expenses.css'

const Expenses = (props) => {
    return (
        <div className="expensesOuter">
            <div className="expensesInner">
                {props.filterYear.length>0?
                    props.filterYear.map(e=><Expense key={e.id} expenseObj={e}/>)
                    :<p className='noRecord'>Oops! No expenses found for this year !!</p>} 
            </div>
        </div>
    )
}

export default Expenses 
