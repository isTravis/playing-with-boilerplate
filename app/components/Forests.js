import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getData } from 'actions/app';

class Forests extends Component {
	componentWillMount() {
		this.props.dispatch(getData('isTravis'));
	}

	render() {
		return (
			<div className={'page'}>
				<Helmet>
					<title>Forests</title>
				</Helmet>

				<h1>Forests</h1>
				<img src={'images/forest.jpg'} alt={'forests'} />
				<div>{JSON.stringify(this.props.appData)}</div>
			</div>
		);
	}
}

Forests.propTypes = {
	dispatch: PropTypes.func.isRequired,
	appData: PropTypes.object,
};

export default connect(state => ({ appData: state.app }))(Forests);
