/* ----------------------------- */
/* Functional Component Template */
/* ----------------------------- */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Template = function({ appData }) {
	return (
		<div id={'template-page'}>
			Template
			{JSON.stringify(appData)}
		</div>
	);
};

Template.propTypes = {
	appData: PropTypes.object.isRequired,
};

export default connect(state => ({ appData: state.app }))(Template);
