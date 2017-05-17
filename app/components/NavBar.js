import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getData } from 'actions/app';

require('./navbar.scss');

class NavBar extends Component {
	componentWillMount() {
		this.props.dispatch(getData());
	}

	render() {
		const toggleSlide = function() {
			const elem = document.getElementsByClassName('nav-menu')[0];
			if (elem.className === 'nav-menu') {
				elem.className = 'nav-menu open';
			} else {
				elem.className = 'nav-menu';
			}
		};

		return (
			<div id="navbar-page">
				<div onClick={toggleSlide}>Nav Bar</div>
				<div className={'nav-menu'} onClick={toggleSlide}>
					<div className={'content'}>
						<ul>
							<li>Item 1</li>
							<li>Item 2</li>
							<li>Item 3</li>
							<li>Item 4</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

NavBar.propTypes = {
	dispatch: PropTypes.func.isRequired,
	appData: PropTypes.object,
};

export default withRouter(connect(state => ({ appData: state.app }))(NavBar));
