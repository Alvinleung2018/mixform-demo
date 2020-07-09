import AxisLineCharts from "../../../charts/lineCharts/axisLineCharts";

const data = [
    {
        day: '7-3',
        programs: '成交额',
        capital: '5354.89'
    },
    {
        day: '7-7',
        programs: '成交额',
        capital: '7241.54'
    },
    {
        day: '7-8',
        programs: '成交额',
        capital: '7936.38'
    }
]

const turnove = () => (
    <AxisLineCharts data={data} position={'day*capital'} color={'programs'} Xname={'day'} Yname={'capital'} />
)

export default turnove