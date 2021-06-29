import React from 'react'
import Chart from '../chartSection/Chart';


const ExpenseChart = (props) => {
    return (
            <Chart expenses={props.expenses} setFilterYear={props.setFilterYear}/>
    )
}

export default ExpenseChart
