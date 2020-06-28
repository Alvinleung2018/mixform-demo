import React from "react";
import dynamic from 'next/dynamic';



const ShangHaiIndex = dynamic('./ShangHaiStockIndex/ShangHaiStockIndex', {
        loading: () => <p>...</p>,
        ssr: false
    })


// const ChartsController = props => {
//     // console.log(props)
//     // const Comp = Dict[props.code]
//     return (<ShangHaiIndex />)
// }

class ChartsController extends React.Component {
    render() {
        return (
            <React.Fragment>
                <ShangHaiIndex />
            </React.Fragment>
        )
    }
}

export default ChartsController