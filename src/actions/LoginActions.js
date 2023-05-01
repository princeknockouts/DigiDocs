import {
	LOGIN_USERNAME_VALUE_CHANGED,
	LOGIN_PASSWORD_VALUE_CHANGED,
	FORGOT_PASSWORD_USERNAME_VALUE_CHANGED,
	FORGOT_PASSWORD_OTP_VALUE_CHANGED,
} from "./ActionTypes";

export const loginUsernameValueChanged = (username) => {
	return (dispatch) => {
		dispatch({
			type: LOGIN_USERNAME_VALUE_CHANGED,
			payload: username,
		});
	};
};

export const loginPasswordValueChanged = (password) => {
	return (dispatch) => {
		dispatch({
			type: LOGIN_PASSWORD_VALUE_CHANGED,
			payload: password,
		});
	};
};

export const forgotPasswordUsernameValueChanged = (username) => {
	return (dispatch) => {
		dispatch({
			type: FORGOT_PASSWORD_USERNAME_VALUE_CHANGED,
			payload: username,
		});
	};
};

export const forgotPasswordOtpValueChanged = (otp) => {
	return (dispatch) => {
		dispatch({
			type: FORGOT_PASSWORD_OTP_VALUE_CHANGED,
			payload: otp,
		});
	};
};
