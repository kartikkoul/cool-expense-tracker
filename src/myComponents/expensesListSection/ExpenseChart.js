import React from 'react'
import Chart from '../chartSection/Chart';


const ExpenseChart = (props) => {
    const chartDataPoints=[
        {label:'JAN', value:0},
        {label:'FEB', value:0},
        {label:'MAR', value:0},
        {label:'APR', value:0},
        {label:'MAY', value:0},
        {label:'JUN', value:0},
        {label:'JUL', value:0},
        {label:'AUG', value:0},
        {label:'SEP', value:0},
        {label:'OCT', value:0},
        {label:'NOV', value:0},
        {label:'DEC', value:0},
    ]


    
    const updateChart = () => {
        for(const expense of props.filterYear){
            const expenseMonth = expense.date.getMonth();
            chartDataPoints[expenseMonth].value += expense.amount;
        }
    }

    updateChart();


    return (
            <Chart expenses={props.expenses} dataPoints={chartDataPoints} setFilterYear={props.setFilterYear} updateChart={updateChart}/>
    )
}

export default ExpenseChart
