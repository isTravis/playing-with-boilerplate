// import Offline from 'offline-plugin/runtime'
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';
import ManageScroll from './components/ManageScroll';
import store from './store';

// if (process.env.NODE_ENV === 'production') Offline.install()

const Root = () => (
	<Provider store={store}>
		<BrowserRouter>
			<ManageScroll>
				<App />
			</ManageScroll>
		</BrowserRouter>
	</Provider>
);

export default Root;

if (!module.hot) render(<Root />, document.querySelector('react'));
