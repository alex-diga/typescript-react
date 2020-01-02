import React from 'react';
import './index.scss';
import Header from '../../components/header'

interface IApiProps {
    storeId?: string,
    userId?: string
}

interface IApiState {
    orderList: Array<any>,
    loading: boolean,

}
class Api extends React.Component<IApiProps, IApiState> {
    constructor(props: IApiProps) {
        super(props)
        this.state = {
            orderList: [],
            loading: false
        }
    }
    componentDidMount() {
    }
    render() {
        return (
            <div className="apipage">
                <Header />
                技术文档
            </div>
        )
    }
}

export default Api
