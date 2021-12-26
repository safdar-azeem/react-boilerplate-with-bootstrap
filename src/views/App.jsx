import React from "react"
import { Switch } from 'react-router-dom';
import { routes, renderRoutes } from "../routes"

const App = () => {
    return (
			<>
				<Switch>
					{renderRoutes(routes)}
				</Switch>
			</>
		);
}

export default App