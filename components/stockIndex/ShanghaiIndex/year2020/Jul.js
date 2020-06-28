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

const Chart = dynamic(import('../../../charts/lineCharts/axisLineCharts'), {
    loading: () => <p>...</p>,
    ssr: false
})


class JulChart extends React.Component {
    render() {
        return(
            <Chart data={data} position={'day*capital'} color={'role'} Xname={'day'} Yname={'capital'} />
        )
    }
}


export default JulChart


