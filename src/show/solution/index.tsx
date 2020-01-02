import React from 'react';
import './index.scss';
import Header from '../../components/header'

interface IhomeProps {
    height?: string,
    localImg?: string,
    onLineImg?: string
}
const Home: React.FC<IhomeProps> = ({height= '50px', ...props}: IhomeProps) => {
    // console.log(props)
    if (!props.localImg) {
        // console.log('localImg不存在')
    }
    return (
        <div className="solution" style={{height: height}}>
            <Header />
            <div className="">
                内容主体
            </div>
        </div>
    )
}

export default Home
