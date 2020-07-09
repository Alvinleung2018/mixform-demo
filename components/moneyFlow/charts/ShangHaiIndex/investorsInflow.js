import AxisLineCharts from "../../../charts/lineCharts/axisLineCharts";

const data = [
    {
        day: '7-3',
        programs: '散户净流入',
        capital: '4.05'
    },
    {
        day: '7-7',
        programs: '散户净流入',
        capital: '30.42'
    },
    {
        day: '7-8',
        programs: '散户净流入',
        capital: '-0.78'
    }
]

const investorsInflow = () => (
    <AxisLineCharts data={data} position={'day*capital'} color={'programs'} Xname={'day'} Yname={'capital'} />
)

export default investorsInflow