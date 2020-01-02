import React from 'react'
import { Route, Redirect } from 'react-router-dom'

interface IAuthorizedRoute {
	// component: new() => React.Component<any, any>
	component: typeof React.Component | React.FC<any>,
	path: string
}
// class AuthorizedRoute extends React.Component<IAuthorizedRoute> {
// 	render() {
// 		const { component: Component, ...rest } = this.props
// 		const isLogged: boolean = true
// 		return (
// 			<Route {...rest} render={props => {
// 				return isLogged
// 					? <Component {...props} />
// 					: <Redirect to="/login" />
// 			}} />
// 		)
// 	}
// }

const AuthorizedRoute: React.FC<IAuthorizedRoute> = (props: IAuthorizedRoute) => {
	const { component: Component, path,  ...rest } = props
	let isPassed: boolean = true
	console.log(props,rest)
	return (
		<Route {...rest} render={props => {
			return isPassed
				? <Component {...props} />
				: <Redirect to="/login" />
		}} />
	)
}


export default AuthorizedRoute