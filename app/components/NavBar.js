import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getData } from 'actions/app';

class NavBar extends Component {
	componentWillMount() {
		this.props.dispatch(getData());
	}

	render() {
		return (
			<div>Nav Bar</div>
		);
	}
}

NavBar.propTypes = {
	dispatch: PropTypes.func.isRequired,
	appData: PropTypes.object,
};

export default withRouter(connect(state => ({ appData: state.app }))(NavBar));
