import React from 'react'
import {Tabs} from 'antd'

import JulChart from "../stockIndex/ShanghaiIndex/year2020/Jul";
const { TabPane } = Tabs;
class TabsComp extends React.Component {
    render() {
        console.log(this.props)
        return(
            <>
                <Tabs defaultActiveKey="1" style={{width: 800}}>
                    <TabPane tab="Tab 1" key="1">
                        Content of Tab Pane 1<JulChart />
                    </TabPane>
                    <TabPane tab="Tab 2" key="2">
                        Content of Tab Pane 2<JulChart />
                    </TabPane>
                    <TabPane tab="Tab 3" key="3">
                        Content of Tab Pane 3
                    </TabPane>

                    {/*<Tabs.TabPane tab="Tab 1" key="1" style={{ height: 400, width: 800 }}>*/}
                    {/*    12121212*/}
                    {/*</Tabs.TabPane>*/}
                    {/*<Tabs.TabPane tab="Tab 2" key="2">*/}
                    {/*    121212*/}
                    {/*</Tabs.TabPane>*/}
                    {/*{*/}
                    {/*    this.props.children.map((Item, index) => {*/}
                    {/*        return (*/}
                    {/*            <React.Fragment key={index}>*/}
                    {/*                <Tabs.TabPane tab={index + 1} key={index + 1}>{Item}</Tabs.TabPane>*/}
                    {/*            </React.Fragment>*/}
                    {/*        )*/}
                    {/*    })*/}
                    {/*}*/}
                </Tabs>
            </>
        )
    }
}

export default TabsComp