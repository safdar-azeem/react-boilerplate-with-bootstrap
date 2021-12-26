import { Route, Redirect } from "react-router-dom"
import { paths } from "./paths"

export const routeType = {
	SECURE: "secure",
	PUBLIC: "public",
	AUTH: "auth",
}
export const renderRoutes = (routes, isauthenticated) => {
	return routes.map((route) => {
		const { path, component, exact, type } = route
		return (
			<Route key={path} path={path} component={component} exact={exact}>
				{type === routeType.SECURE && !isauthenticated && <Redirect to={paths.LOGIN} />}
			</Route>
		)
	})
}
