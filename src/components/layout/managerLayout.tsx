import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ApiManager from '../../manager/api'
import managerCenter from '../../manager/center'

const ManagerLayout: React.FC = () => {
    return (
        <Switch>
            <Route path='/manager/apilist/:name' component={ApiManager} />
            <Route path='/manager/center' component={managerCenter} />
        </Switch>
    )
}
export default ManagerLayout