import React from 'react'
import { Route, Switch } from 'react-router-dom'
import GraData from '../../show/data'
import Solution from '../../show/solution'
import Doc from '../../show/doc'
import Api from '../../show/api'

const ShowLayout: React.FC = () => {
    return (
        <Switch>
            <Route path='/show/gradata' component={GraData} />
            <Route path='/show/solution' component={Solution} />
            <Route path='/show/api' component={Api} />
            <Route path='/show/doc' component={Doc} />
        </Switch>
    )
}
export default ShowLayout