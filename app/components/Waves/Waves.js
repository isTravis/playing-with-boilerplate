import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { getData } from 'actions/app';

class Waves extends Component {
	componentWillMount() {
		this.props.dispatch(getData('333fred'));
	}

	render() {
		return (
			<div className={'page'}>
				<Helmet>
					<title>Waves</title>
				</Helmet>

				<h1>Waves</h1>
				<img width={'150px'} src={'images/waves.png'} alt={'Waves'} />
				<div>{JSON.stringify(this.props.appData)}</div>
			</div>
		);
	}
}

Waves.propTypes = {
	dispatch: PropTypes.func.isRequired,
	appData: PropTypes.object.isRequired,
};

export default connect(state => ({ appData: state.app }))(Waves);
