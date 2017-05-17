/* ---------- */
// Load Actions
/* ---------- */
import {
	LOGIN_GET_LOAD,
	LOGIN_GET_SUCCESS,
	LOGIN_GET_FAIL,
} from 'actions/app';

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
	case LOGIN_GET_LOAD:
		return {};
	case LOGIN_GET_SUCCESS:
		return {
			appData: action.result,
		};
	default:
		return state;
	}
}
