import React from 'react'
import './Chart.css'


const Chart = () => {

    let filterYear = '';

    const filteredYear = e =>{
        filterYear=e.target.value;
    }


    return (
        <div className="chartOuter">
            <div className="chartInner">

                <div className="filterSection">
                    <p>Filter by year</p>
                    <select onChange={filteredYear}>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                    </select> 
                </div>
                
                <div className="chartSection"> 
                    CHART GOES HERE!!
                </div>
            </div>
        </div>
    )
}

export default Chart
