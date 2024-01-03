import { Bar, Doughnut, Line } from 'react-chartjs-2';
import { Chart as ChartJS, defaults } from "chart.js/auto";
import './chart.css'
import React from 'react'

const Chart = ({type , data , chartContainer, chartWidth}) => {
    
    return (
        <div className={chartContainer} style={{width : `${chartWidth}`}}>
            {type === 'Bar' && <Bar
                
                data={data} />}

            {type === 'Doughnut' && <Doughnut
                key={new Date()}
                data={data} />}

            {type === 'Line' && <Line
                key={new Date()}
                data={data} />}

            
        </div>
    )
}

export default Chart