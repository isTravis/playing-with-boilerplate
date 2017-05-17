import { apiFetch } from 'utilities';

/*--------*/
// Define Action types
//
// All action types are defined as constants. Do not manually pass action
// types as strings in action creators
/*--------*/
export const LOGIN_GET_LOAD = 'app/LOGIN_GET_LOAD';
export const LOGIN_GET_SUCCESS = 'app/LOGIN_GET_SUCCESS';
export const LOGIN_GET_FAIL = 'app/LOGIN_GET_FAIL';

/*--------*/
// Define Action creators
//
// All calls to dispatch() call one of these functions. Do not manually create
// action objects (e.g. {type:example, payload:data} ) within dispatch()
// function calls
/*--------*/
export function getData(user) {
	return (dispatch) => {
		dispatch({ type: LOGIN_GET_LOAD });
		return apiFetch(user)
		.then((result) => {
			dispatch({ type: LOGIN_GET_SUCCESS, result });
		})
		.catch((error) => {
			dispatch({ type: LOGIN_GET_FAIL, error });
		});
	};
}
