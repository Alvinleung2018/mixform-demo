// import AxisLineCharts from "../../../charts/lineCharts/axisLineCharts";
import dynamic from "next/dist/next-server/lib/dynamic";

const data = [
    {
        day: '7-3',
        programs: '主力净流入',
        capital: '154.65'
    },
    {
        day: '7-7',
        programs: '主力净流入',
        capital: '453.93'
    },
    {
        day: '7-8',
        programs: '主力净流入',
        capital: '-236.82'
    }
]

const Chart = dynamic(import('../../../charts/lineCharts/axisLineCharts'), {
    loading: () => <p>...</p>,
    ssr: false
})

const mainInFlow = () => (
    <Chart data={data} position={'day*capital'} color={'programs'} Xname={'day'} Yname={'capital'} />
)

export default mainInFlow