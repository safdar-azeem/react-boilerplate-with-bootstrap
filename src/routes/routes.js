import { lazy } from "react"
import { paths } from "./paths"
import { routeType } from "./route.config"

export const secureRoutes = [
	{
		path: paths.ABOUT,
		component: lazy(() => import("../views/public/About")),
		exact: true,
		type: routeType.SECURE,
	},
]

export const publicRoutes = [	
	{
		path: paths.HOME,
		component: lazy(() => import("../views/public/Home")),
		exact: true,
		type: routeType.PUBLIC,
	},
]

export const authRoutes = [
	{
		path: paths.LOGIN,
		component: lazy(() => import("../views/secure/Login")),
		exact: true,
		type: routeType.AUTH,
	},
	{
		path: paths.REGISTER,
		component: lazy(() => import("../views/secure/Register")),
		exact: true,
		type: routeType.AUTH,
	},
]

export const routes = [
	...publicRoutes,
	...secureRoutes,
	...authRoutes,
]