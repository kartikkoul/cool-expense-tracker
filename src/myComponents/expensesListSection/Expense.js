import React, {useState} from 'react'
import './Expense.css'

const Expense = (props) => {

    const DD = props.expenseObj.date.toLocaleDateString('en-US', {day :'numeric'});
    const YY = props.expenseObj.date.toLocaleDateString('en-US', {year : 'numeric'});
    const MM = props.expenseObj.date.toLocaleDateString('en-US', {month : 'long'}).slice(0,3).toUpperCase();

    const [sectionDeleteWidth, setsectionDeleteWidth] = useState("0%")

    return (
        <div className='expenseOuter' onMouseOver={()=>setsectionDeleteWidth("4%")} onMouseOut={()=>setsectionDeleteWidth("0%")} >
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
                <div className="sectionDelete" style={{width:sectionDeleteWidth}}>
                    <div className="sectionDeleteInner">
                        <button className='deleteButton'>
                            <div className="svg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Expense
