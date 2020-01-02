import React from 'react';
import './index.scss';
import Header from '../../components/header'

interface IOrderProps {
    storeId?: string,
    userId?: string
}

interface IOrderState {
    orderList: Array<any>,
    loading: boolean,

}
class Order extends React.Component<IOrderProps, IOrderState> {
    constructor(props: IOrderProps) {
        super(props)
        this.state = {
            orderList: [],
            loading: false
        }
    }
    componentDidMount() {
    }
    render() {
        const {orderList} = this.state
        return (
            <div className="docPage">
                <Header />
                开发指南
            </div>
        )
    }
}

export default Order
