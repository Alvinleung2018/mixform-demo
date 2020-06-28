import React from 'react';
import dynamic from "next/dynamic";

import {createObj} from "../../../../util/tool";
import sixMonthData from '../../../../data/data'

const data = createObj('day', 'capital','role',['main forces', 'retail investors'], sixMonthData.sixMonthArr, sixMonthData.sixMonthCapital)
// const data = [
//     {
//         day: '6-1',
//         role: 'main forces',
//         capital: 122.168
//     },
//     {
//         day: '6-1',
//         role: 'retail investors',
//         capital: -74.22
//     },
//     {
//         day: '6-2',
//         role: 'main forces',
//         capital: -86.31
//     },
//     {
//         day: '6-2',
//         role: 'retail investors',
//         capital: 88.65
//     },
//     {
//         day: '6-3',
//         role: 'main forces',
//         capital: -62.52
//     },
//     {
//         day: '6-3',
//         role: 'retail investors',
//         capital: 65.91
//     },
//     {
//         day: '6-4',
//         role: 'main forces',
//         capital: -102.77
//     },
//     {
//         day: '6-4',
//         role: 'retail investors',
//         capital: 90.59
//     },
// ]

const a = [
    {
        id: 1,
        fundCode: "110022",
        fundName: "易方达消费行业股票",
        fundType: "股票型",
        fundSize: [
            {
                quarter: '2018-03',
                size: '172.08',
                program: '基金规模'
            },
            {
                quarter: '2018-06',
                size: '168.73',
                program: '基金规模'
            },
            {
                quarter: '2018-09',
                size: '158.47',
                program: '基金规模'
            },
            {
                quarter: '2018-12',
                size: '136.71',
                program: '基金规模'
            },
        ]
    }
]

// console.log(JSON.parse(a))
// a[0].fundSize[0]

const Chart = dynamic(import('../../../charts/lineCharts/axisLineCharts'), {
    loading: () => <p>...</p>,
    ssr: false
})


class JulChart extends React.Component {
    render() {
        // console.log((JSON.parse(a)))
        console.log(data)
        return(
            <Chart data={data} position={'day*capital'} color={'role'} Xname={'day'} Yname={'capital'} />
        )
    }
}


export default JulChart


