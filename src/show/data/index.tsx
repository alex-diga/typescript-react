import React from 'react';
import './index.scss';
import Header from '../../components/header'

interface IGraDataProps {
    storeId?: string,
    userId?: string
}

interface IGraDataState {
    orderList: Array<any>,
    loading: boolean,

}
class GraData extends React.Component<IGraDataProps, IGraDataState> {
    constructor(props: IGraDataProps) {
        super(props)
        this.state = {
            orderList: [],
            loading: false
        }
    }
    componentDidMount() {
        console.log(this.props.storeId)
    }
    render() {
        return (
            <div className="orderpage">
                <Header />
                技术文档
            </div>
        )
    }
}

export default GraData
