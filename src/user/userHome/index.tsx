import React from 'react';
import './index.scss';
import Header from '../../components/header'

interface IUserHomeProps {
    storeId?: string,
    userId?: string
}

interface IUserHomeState {
    orderList: Array<any>,
    loading: boolean,

}
class UserHome extends React.Component<IUserHomeProps, IUserHomeState> {
    constructor(props: IUserHomeProps) {
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

export default UserHome
