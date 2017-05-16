import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, withRouter, Link } from 'react-router-dom';
import Async from 'react-code-splitting';

require('./app.scss');

const Landing = () => <Async load={import('components/Landing')} />;
const About = () => <Async load={import('components/About')} />;
const NavBar = () => <Async load={import('components/NavBar')} />;

// const App = ({ appData }) => {
const App = function({ appData }) {
	return (
		<div>
			<Helmet>
				<title>React Starter Site</title>
				<meta name="description" content="A React Starter Site Template" />
			</Helmet>

			<NavBar />
			<ul>
				<li><Link to={'/'}>Home</Link></li>
				<li><Link to={'/about'}>About</Link></li>
			</ul>


			<Route exact path="/" component={Landing} />
			<Route path="/about" component={About} />
		</div>
	);
};

App.propTypes = {
	appData: PropTypes.shape({}).isRequired,
	dispatch: PropTypes.func,
};

export default withRouter(connect(state => ({ appData: state.app }))(App));
