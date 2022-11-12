import {
	LOGIN_USERNAME_VALUE_CHANGED,
	LOGIN_PASSWORD_VALUE_CHANGED,
} from './ActionTypes';

const loginUsernameValueChanged = username => {
	return dispatch => {
        dispatch({
            type: LOGIN_USERNAME_VALUE_CHANGED,
            payload: username
        });
    }
}

const loginPasswordValueChanged = password => {
	return dispatch => {
		dispatch({
			type: LOGIN_PASSWORD_VALUE_CHANGED,
			payload: password
		})
	}
}