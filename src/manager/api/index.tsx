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
class ApiManager extends React.Component<IApiProps, IApiState> {
    constructor(props: IApiProps) {
        super(props)
        this.state = {
            orderList: [],
            loading: false
        }
    }
    componentDidMount() {
        console.log(111)
    }
    render() {
        return (
            <div className="apipage">
                <Header />
                ApiManager技术文档
            </div>
        )
    }
}

export default ApiManager
