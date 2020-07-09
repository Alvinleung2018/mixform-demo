import React from 'react'
import {withRouter} from 'next/router'
import {Button} from "antd";

import ChartsController from "../components/charts/chartsController";
// import Dy from "../components/charts/controler";
import ChartControler from "../components/moneyFlow/charts/controler";
// import JulChart from "../components/stockIndex/ShanghaiIndex/year2020/Jul";
import MixTable from "../components/table/mixTable";
import ComprehensiveFlow from "../components/moneyFlow/comprehensiveFlow/comprehensiveFlow";

class Index extends React.Component{

    state = {
        code: ''
    }

    componentDidMount() {
        // console.log(this.props)
        // const {router} = this.props;
        // const patch = router.asPath.match(/code=[0-9a-zA-Z]+/)[0];
        // const code = patch.split('=')[1];
        // console.log(code)
        // this.setState({code})
    }

    render() {
        console.log(this.state.code)
        return (
            <div>
                {/*<JulChart />*/}
                {/*<MixTable />*/}
                <ChartControler indexType={'ShangHaiIndex'}  program={"mainFlow"} />
                <ComprehensiveFlow />
            </div>
        )
    }
}

export default withRouter(Index)