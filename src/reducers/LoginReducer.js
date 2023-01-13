import {
	LOGIN_USERNAME_VALUE_CHANGED,
	LOGIN_PASSWORD_VALUE_CHANGED,
	FORGOT_PASSWORD_USERNAME_VALUE_CHANGED,
	FORGOT_PASSWORD_OTP_VALUE_CHANGED,
} from '../actions/ActionTypes';

var INITIAL_STATE = {
	loginUsername: "",
	loginPassword: "",

	forgotPasswordUsername: "",
	forgotPasswordOTP: 0,
}

export default (state=INITIAL_STATE, action) => {
	switch(action.type) {
		case LOGIN_USERNAME_VALUE_CHANGED:
			return {...state, loginUsername: action.payload};
		case LOGIN_PASSWORD_VALUE_CHANGED:
			return {...state, loginPassword: action.payload};
		case FORGOT_PASSWORD_USERNAME_VALUE_CHANGED:
			return{...state, forgotPasswordUsername: action.payload};
		case FORGOT_PASSWORD_OTP_VALUE_CHANGED:
			return {...state, forgotPasswordOTP: action.payload};
		default:
			return state;
	}
}