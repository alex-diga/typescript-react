import React from 'react';
import {RouteComponentProps, withRouter, Link} from "react-router-dom"
import './index.scss';

interface IHeaderProps extends RouteComponentProps{
    name?: string,
    style?: React.CSSProperties;
}
interface IHeaderStates {
    currentPath: string
}
class Header extends React.Component<IHeaderProps, IHeaderStates> {
    static defaultProps = {
        name: 'admin'
    }
    constructor(props: IHeaderProps) {
        super(props)
        this.state = {
            currentPath: ''
        }
        // this.linkPage = this.linkPage.bind(this)
    }
    // linkPage(path: Array<string>) {
    //     this.props.history.push(path[0])
    //     this.setState({
    //         currentPath: path[0]
    //     })
    // }
    componentDidMount() {
        // console.log(React.Children)
        // console.log(React)
        this.setState({
            currentPath: this.props.location.pathname
        })
    }
    render() {
        const arr: Array<any> = [
            {name: '支持中心', path: '/', key: 'path1', linght: false}, 
            {name: '控制中心', path: '/manager/center', key: 'path2', linght: true}
        ]
        const nav: Array<any> = [
            {path: ['/index', '/'], key: '1', name: "首页"},
            {path: ['/show/solution'], key: '2', name: "解决方案"},
            {path: ['/show/doc'], key: '3', name: "开发指南"},
            {path: ['/show/api'], key: '4', name: "技术文档"}
        ]
        const {currentPath} = this.state
        return (
            <div className='headerBox'>
                <div className="app-box-inner headerContainer">
                    <h1 className="headerTitle">
                        <p className="link ">
                            <Link className="linkPlatform" to='/index'> platform开放平台</Link>
                        </p>
                        <p>xxx.platform.com</p>
                    </h1>
                    <div className="headerNav">
                        {nav && nav.map(item => {
                            return (
                                <div className={`link navItem ${item.path.indexOf(currentPath) !== -1 ? 'current' : ''}`} key={item.key}>
                                    {/* <span onClick={this.linkPage.bind(this, item.path)}>{item.name}</span> */}
                                    <Link className="item" to={item.path[0]}>{item.name}</Link>
                                </div>
                            )
                        })}
                    </div>
                    <div className="inputSearch">
                        <span className="searchBox">
                        <input type="text"/>
                        </span>
                    </div>
                    <div className="headerExtra">
                        {arr.map(item => {
                            return (
                                <span key={item.key} className={`link ${item.linght ? 'linghtBox' : ''}`}>
                                    <Link to={item.path}>{item.name}</Link>
                                </span>
                                // <span onClick={this.linkPage.bind(this, item.path)} key={item.key} className={`link ${item.linght ? 'linghtBox' : ''}`}>{item.name}</span>
                            )
                        })}       
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Header)
