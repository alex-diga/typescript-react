import React from 'react';
import './index.scss';

interface IApiProps {
    storeId?: string,
    userId?: string
}

interface IApiState {
    orderList: Array<any>,
    loading: boolean,

}
class ManagerCenter extends React.Component<IApiProps, IApiState> {
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
                控制中心
            </div>
        )
    }
}

export default ManagerCenter
