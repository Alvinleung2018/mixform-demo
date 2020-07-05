import React from 'react';
import { Chart, Axis, Geom, Tooltip, Legend } from 'bizcharts';

import css from './style.scss'


const AxisLineCharts = ({data, position, color, Xname, Yname}) => {
    console.dir(data)
    return (
        <>
            <h1>六月</h1>
            <div className={css.lineContainer}>
                <Chart data={data} autoFit>
                    <Axis name={Xname} />
                    <Axis name={Yname}
                          label={{
                              formatter: val => `${val}亿`,
                          }}
                    />
                    <Tooltip
                        crosshairs={{
                            type: 'y',
                        }}
                        shared={true}
                    />
                    <Geom type="line" shape={'smooth'} position={position} size={2} color={color} />
                    <Geom type="point"
                          position={position}
                          size={4}
                          shape={'circle'}
                          color={color}
                          style={{
                              stroke: '#fff',
                              lineWidth: 1,
                          }}
                    />
                </Chart>
            </div>
        </>

    )
}


export default AxisLineCharts