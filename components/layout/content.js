import { Layout} from 'antd';
const { Content } = Layout;


class ContentExt extends React.Component{
    render() {
        const {children} = this.props;
        // console.log(this.props)
        return (
            <Content children={children}/>
        )
    }
}

export default ContentExt
