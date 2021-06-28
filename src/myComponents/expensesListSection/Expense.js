import React from 'react'
import './Expense.css'

const Expense = (props) => {

    const DD = props.expenseObj.date.toLocaleDateString('en-US', {day :'numeric'});
    const YY = props.expenseObj.date.toLocaleDateString('en-US', {year : 'numeric'});
    const MM = props.expenseObj.date.toLocaleDateString('en-US', {month : 'long'}).slice(0,3).toUpperCase();


    return (
        <div className='expenseOuter'>
            <div className="expenseInner">
                <div className="sectionOneOuter">
                    <div className="sectionOneInner">
                        <div className="date">
                            <div className="MMYY">
                                <p>{MM} {YY}</p>
                            </div>
                            <div className="DD">
                                <p>{DD}</p>
                            </div>
                        </div>
                        <div className="title">
                            <p>{props.expenseObj.title}</p>
                        </div>
                    </div>
                </div>
                <div className="sectionTwoOuter">
                    <div className="sectionTwoInner">
                        <p><span className="dollarSign">$</span>{props.expenseObj.amount}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Expense
