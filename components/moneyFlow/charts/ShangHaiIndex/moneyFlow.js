import React from 'react'

import AxisLineCharts from "../../../charts/lineCharts/axisLineCharts";

const data = [
    {
        day: '7-3',
        programs: '累计净流入',
        capital: '140.76'
    },
    {
        day: '7-7',
        programs: '累计净流入',
        capital: '492.53'
    },
    {
        day: '7-8',
        programs: '累计净流入',
        capital: '-280.79'
    }
]

const cumulativeInflow = () => (
    <AxisLineCharts data={data} position={'day*capital'} color={'programs'} Xname={'day'} Yname={'capital'} />
)

export default cumulativeInflow