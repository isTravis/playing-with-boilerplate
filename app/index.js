import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from 'components/App';
import ManageScroll from 'components/ManageScroll';
import store from './store';

require('./manageServiceWorker');

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
