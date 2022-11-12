import {
	LOGIN_USERNAME_VALUE_CHANGED,
	LOGIN_PASSWORD_VALUE_CHANGED,
} from '../actions/ActionTypes';

var INITIAL_STATE = {
	loginUsername: "",
	loginPassword: "",
}

export default (state=INITIAL_STATE, action) => {
	switch(action.type) {
		case LOGIN_USERNAME_VALUE_CHANGED:
			return {...state, loginUsername: action.payload};
		case LOGIN_PASSWORD_VALUE_CHANGED:
			return {...state, loginPassword: action.payload};
		default:
			return state;
	}
}