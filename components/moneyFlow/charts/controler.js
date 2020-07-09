import React from "react";
import dynamic from "next/dynamic";

// const DyCustom = dynamic(
//     import('./ShangHaiIndex/moneyFlow'),
//     {
//         loading: () => <p>...</p>,
//         ssr: false
//     }
// )


const options = {
    loading: () => <p>...</p>,
    ssr: false
}


const chartsPackage = {
    ShangHaiIndex: {
        mainFlow: dynamic(
            import('./ShangHaiIndex/mainInFlow'),
            options
        )

    }
}

class ChartControler extends React.Component {

    render() {
        const {indexType, program} = this.props
        const a = chartsPackage[indexType]
        const B = a[program]

        return (
            <React.Fragment>
                <B />
            </React.Fragment>
        )
    }
}


export default ChartControler