import React from 'react';

import MixTable from "../../table/mixTable";
import flowData from "../../../data/flowData";


class ComprehensiveFlow extends React.Component {
    render() {
        const columns = [
            {
                title: "代码",
                dataIndex: "indexCode",
            },
            {
                title: "名称",
                dataIndex: "indexName"
            },
            {
                title: "累计净流入",
                dataIndex: "cumulativeInflow",
            },
            {
                title: "主力净流入",
                dataIndex: "mainInflow",

            },
            {
                title: "散户净流入",
                dataIndex: "investorsInflow"
            },
            {
                title: "成交额",
                dataIndex: "turnove"
            }
        ]

        return (
            <>
                <MixTable data={flowData} columns={columns}  />
            </>
        )
    }
}

export default ComprehensiveFlow