import React from 'react'
import { Route, Switch } from 'react-router-dom'
import UserHome from '../../user/userHome'

const UserLayout: React.FC = () => {
    return (
        <Switch>
            <Route path='/user/userhome' component={UserHome} />
        </Switch>
    )
}
export default UserLayout