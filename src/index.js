import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './views/App';
import { BrowserRouter as Router } from 'react-router-dom';
import Loading from './components/common/Loading';
import { Provider } from 'react-redux';
import store from './store/';
import './assets/scss/bootstrap.scss';

ReactDOM.render(
	<>
		<Suspense fallback={<Loading  className='vh-90 vw-100 center'/>}>
			<Provider store={store}>
				<Router>
					<App />
				</Router>
			</Provider>
		</Suspense>
	</>,
	document.getElementById('root'),
);