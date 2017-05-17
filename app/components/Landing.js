import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

require('./landing.scss');

const Landing = function({ appData }) {
	return (
		<div id={'landing-page'}>
			<Link to={'/waves'}>
				<div className={'card'}>
					<span className={'title'}>Tidal Waves</span>
					<img src={'images/waves.png'} alt={'waves'} />
				</div>
			</Link>

			<Link to={'/forests'}>
				<div className={'card'}>
					<span className={'title'}>Forests</span>
					<img src={'images/forest.jpg'} alt={'forests'} />
				</div>
			</Link>
		</div>
	);
};

Landing.propTypes = {
	appData: PropTypes.shape({}).isRequired,
};

export default connect(state => ({ appData: state.app }))(Landing);
