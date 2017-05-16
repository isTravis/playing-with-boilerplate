import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

require('./landing.scss');

const Landing = function({ appData }) {
	return (
		<div id={'landing-page'}>
			<h1>This is my Landing Page!!</h1>
			<div>{JSON.stringify(appData)}</div>
			<ul>
				<li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li>
				<li>2</li><li>2</li><li>2</li><li>2</li><li>2</li><li>2</li><li>2</li><li>2</li><li>2</li>
				<li>3</li><li>3</li><li>3</li><li>3</li><li>3</li><li>3</li><li>3</li><li>3</li><li>3</li>
				<img src={'images/icon.png'} />
			</ul>
		</div>
	);
};

Landing.propTypes = {
	appData: PropTypes.shape({}).isRequired,
};

export default connect(state => ({ appData: state.app }))(Landing);
