/* ---------- */
// Load Actions
/* ---------- */
// import {
// 	LOGIN_GET_LOAD,
// 	LOGIN_GET_SUCCESS,
// 	LOGIN_GET_FAIL,
// } from 'containers/App/actions';

/* ------------------- */
// Define Default State
/* ------------------- */
const defaultState = {
	appData: undefined,
};

/* ----------------------------------------- */
// Bind actions to specific reducing functions
/* ----------------------------------------- */
export default function reducer(state = defaultState, action) {
	switch (action.type) {
	// case LOGIN_GET_FAIL:
	// 	return state.set('loginFinished', true);
	// case GET_PUB_SUCCESS:
	// 	return {
	// 		...state,
	// 		pub: action.result,
	// 	};
	default:
		return state;
	}
}
