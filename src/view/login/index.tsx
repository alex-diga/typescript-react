import React from 'react';
import './index.scss';

interface ILoginProps {
    storeId?: string,
    userId?: string
}

interface ILoginState {
    orderList: Array<any>,
    loading: boolean,

}
class Login extends React.Component<ILoginProps, ILoginState> {
    constructor(props: ILoginProps) {
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
            <div className="orderpage">
                登录页面
            </div>
        )
    }
}

export default Login
