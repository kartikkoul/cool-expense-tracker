import React from 'react'
import './Expense.css'

const Expense = (props) => {

    console.log(props.expenseObj);

    return (
        <div className='expenseOuter'>
            <div className="expenseInner">
                <div className="sectionOneOuter">
                    <div className="sectionOneInner">
                        <div className="date">
                            <div className="MMYY">
                                <p>JUN 2021</p>
                            </div>
                            <div className="DD">
                                <p>21</p>
                            </div>
                        </div>
                        <div className="title">
                            <p>MacBook Pro</p>
                        </div>
                    </div>
                </div>
                <div className="sectionTwoOuter">
                    <div className="sectionTwoInner">
                        <p><span className="dollarSign">$</span>2,695.18</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Expense
