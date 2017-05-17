import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, withRouter, Link } from 'react-router-dom';
import Async from 'react-code-splitting';
import NavBar from 'components/NavBar';

require('./app.scss');

const Landing = () => <Async load={import('components/Landing')} />;
const Waves = () => <Async load={import('components/Waves')} />;
const Forests = () => <Async load={import('components/Forests')} />;

// const App = ({ appData }) => {
const App = function({ appData }) {
	return (
		<div>
			<Helmet>
				<title>React Starter Site</title>
				<meta name="description" content="A React Starter Site Template" />
			</Helmet>

			<NavBar />

			<Route exact path="/" component={Landing} />
			<Route path="/waves" component={Waves} />
			<Route path="/forests" component={Forests} />
		</div>
	);
};

App.propTypes = {
	appData: PropTypes.shape({}).isRequired,
	dispatch: PropTypes.func,
};

export default withRouter(connect(state => ({ appData: state.app }))(App));
