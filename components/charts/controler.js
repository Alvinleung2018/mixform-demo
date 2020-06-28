import React from "react";
import dynamic from "next/dynamic";


const DyCustom = dynamic(
    import('./a/myLineChart'),
    {
        loading: () => <p>...</p>,
        ssr: false
    }
)

// const Dy = ({do}) => {
//     return(
//         {
//             do ? <DyCustom /> null
//         }
//     )
// }

class Dy extends React.Component {

    render() {

        return (
            <React.Fragment>
                <DyCustom />
            </React.Fragment>
        )
    }
}


export default Dy