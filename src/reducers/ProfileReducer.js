import {
	PROFILE_CONTACT_VALUE_CHANGED,
	PROFILE_EMAIL_VALUE_CHANGED,
	PROFILE_FIRST_NAME_VALUE_CHANGED,
	PROFILE_GENDER_VALUE_CHANGED,
	PROFILE_LAST_NAME_VALUE_CHANGED,
	SET_PROFILE_DATA,
} from "../actions/ActionTypes";

var INITIAL_STATE = {
	first_name: "",
	last_name: "",
	gender: "",
	contact: 0,
	email_id: "",
	profile_data: [],
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case PROFILE_FIRST_NAME_VALUE_CHANGED:
			return { ...state, first_name: action.payload };
		case PROFILE_LAST_NAME_VALUE_CHANGED:
			return { ...state, last_name: action.payload };
		case PROFILE_GENDER_VALUE_CHANGED:
			return { ...state, gender: action.payload };
		case PROFILE_CONTACT_VALUE_CHANGED:
			return { ...state, contact: action.payload };
		case PROFILE_EMAIL_VALUE_CHANGED:
			return { ...state, email_id: action.payload };
		case SET_PROFILE_DATA:
			return { ...state, profile_data: action.payload };
		default:
			return state;
	}
};
